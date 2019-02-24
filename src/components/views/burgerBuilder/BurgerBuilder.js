import React, { Component } from 'react';
// HOC
import Aux from '../../hoc/aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// COMPONENTS
import BuildControls from '../burgerBuilder/buildControls/BuildControls';
import BurgerView from '../burgerBuilder/burgerView/BurgerView';
import Modal from '../../sharedLayout/modal/Modal';
import OrderSummary from './orderSummary/OrderSummary';
import Spinner from '../../common/spinner/Spinner';
// CONST/ENUMS
import { INGREDIENTS_PRICES } from '../../../constants/ingredients';
// API
import { burgerAPI } from '../../../services/api/index';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasable: 0,
        isPurchasing: false,
        isLoading: false,
    }

    /**
     * HANDLERS
     */

    addIngredientHandler = (type) => {
        this.updateIngredient(type, 1)
    };

    removeIngredientHandler = (type) => {
        this.updateIngredient(type, -1)
    };

    purchasingHandler = () => {
        this.setState({ isPurchasing: true })
    };

    purchaseContinuedHandler = () => {
        this.setState({
            isLoading: true
        })

        const {
            ingredients,
            totalPrice
        } = this.state;

        const order = {
            ingredients,
            totalPrice,
            customer: {
                name: 'Fatty Boy',
                address: {
                    street: 'Elm Street',
                    zipCode: '00-777',
                    country: 'USA'
                },
                email: 'fatty@eatmetasty.com'
            },
            deliveryMethod: 'Fastest'

        }
        burgerAPI
            .post('/orders.json', order)
            .then((response => {
                this.setState({
                    isLoading: false,
                    isPurchasing: false
                })
            }))
            .catch((error) => {
                this.setState({
                    isLoading: false,
                    isPurchasing: false
                })
            });
    };

    purchaseCanceldHandler = () => {
        this.setState({ isPurchasing: false })
    };

    /**
     * HELPERS
     */

    updateIngredient = (type, num) => {
        const updatedIngredient = this.state.ingredients[type] + num;
        const ingredients = { ...this.state.ingredients, [type]: updatedIngredient };
        const totalPrice = this.state.totalPrice + INGREDIENTS_PRICES[type.toUpperCase()];
        this.setState({ ingredients, totalPrice });
        this.updatePurchaseHandler(ingredients);
    }

    updatePurchaseHandler = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingredient => ingredients[ingredient])
            .reduce((sum, item) => sum + item, 0);

        const purchasable = sum > 0;
        this.setState({ purchasable });
    }

    chckIfDisabled = () => {
        const disabledInfo = { ...this.state.ingredients };
        for (let ingredient in disabledInfo) {
            disabledInfo[ingredient] = disabledInfo[ingredient] <= 0;
        }
        return disabledInfo;
    }

    /**
     * RENDERERS
     */

    renderSummaryModal = () => {
        const { isLoading } = this.state;

        const orderSummaryProps = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            purchaseContinuedHandler: this.purchaseContinuedHandler,
            purchaseCanceldHandler: this.purchaseCanceldHandler
        }

        const modalBody = isLoading
            ? <Spinner />
            : <OrderSummary {...orderSummaryProps} />

        return (
            <Modal 
                isOpen={this.state.isPurchasing}
                modalCloseHandler={this.purchaseCanceldHandler}
            >
                {modalBody}
            </Modal>
        )
    }

    render() {

        const buildControlsProps = {
            purchasable: this.state.purchasable,
            totalPrice: this.state.totalPrice,
            disabled: this.chckIfDisabled(),
            addIngredientHandler: this.addIngredientHandler,
            removeIngredientHandler: this.removeIngredientHandler,
            purchasingHandler: this.purchasingHandler
        }

        return (
            <Aux>
                {this.renderSummaryModal()}
                <BurgerView ingredients={this.state.ingredients}/>
                <BuildControls { ...buildControlsProps }/>
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, burgerAPI);