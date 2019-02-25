import React, { Component, Fragment } from 'react';
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
        ingredients: null,
        totalPrice: 0,
        purchasable: 0,
        isPurchasing: false,
        isLoading: false,
        error: false,
    }

    componentDidMount() {
        burgerAPI.get('https://react-burger-app-617db.firebaseio.com/ingredients.json')
            .then(response => {
                const ingredients = response.data;
                this.setState({ ingredients })
            })
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
        const { 
            isLoading,
            ingredients,
            totalPrice
        } = this.state;

        const orderSummaryProps = {
            ingredients,
            totalPrice,
            onPurchaseContinue: this.purchaseContinuedHandler,
            onPurchaseCancel: this.purchaseCanceldHandler
        }

        const modalBody = (isLoading || !ingredients)
            ? <Spinner />
            : <OrderSummary {...orderSummaryProps} />

        return (
            <Modal 
                isOpen={this.state.isPurchasing}
                onClose={this.purchaseCanceldHandler}
            >
                {modalBody}
            </Modal>
        )
    }

    renderBurgerView = () => {
        const { 
            ingredients,
            purchasable,
            totalPrice
        } = this.state;

        const burgerViewProps = {
            ingredients
        }

        const buildControlsProps = {
            purchasable,
            totalPrice,
            disabled: this.chckIfDisabled(),
            onAddIngredient: this.addIngredientHandler,
            onRemoveIngredient: this.removeIngredientHandler,
            onPurchase: this.purchasingHandler
        }

        if (!ingredients) {
            return <Spinner />
        }

        return (
            <Aux>
                <BurgerView {...burgerViewProps}/>
                <BuildControls {...buildControlsProps}/>
            </Aux>
        );
    }

    render() {

        return (
            <Aux>
                {this.renderSummaryModal()}
                {this.renderBurgerView()}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, burgerAPI);