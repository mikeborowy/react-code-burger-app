import React, { Component } from 'react';
// HOC
import Aux from '../../hoc/aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// COMPONENTS
import Spinner from '../../common/spinner/Spinner';
import Burger from '../../common/burger/Burger';
import BuildControls from '../burgerBuilder/buildControls/BuildControls';
import Modal from '../../sharedLayout/modal/Modal';
import OrderModal from './orderModal/OrderModal';
// CONST/ENUMS
import { INGREDIENTS_PRICES } from '../../../constants/ingredients';
import { ROUTES } from '../../../constants/routes';
// API
import { burgerAPI } from '../../../services/api/index';

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 0,
        purchasable: false,
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
        });

        let queryStr = this.setQueryParams(this.state.ingredients);
        queryStr += `&totalPrice=${this.state.totalPrice}`;
        const query = {
            pathname: ROUTES.CHECKOUT.LINK,
            search: `?${queryStr}`
        }
        this.props.history.push(query);
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
        const disabledInfo = { ...this.props.ingredients };
        for (let ingredient in disabledInfo) {
            disabledInfo[ingredient] = disabledInfo[ingredient] <= 0;
        }
        return disabledInfo;
    }

    setQueryParams = (obj) => {
        const queryParams = [];
        for (const item in obj) {
            queryParams.push(
                `${encodeURIComponent(item)}=${encodeURIComponent(obj[item])}`
            )
        }
        return queryParams.join('&');
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

        const orderModalProps = {
            ingredients,
            totalPrice,
            onPurchaseContinue: this.purchaseContinuedHandler,
            onPurchaseCancel: this.purchaseCanceldHandler
        }

        const modalBody = (isLoading || !ingredients)
            ? <Spinner />
            : <OrderModal {...orderModalProps} />

        return (
            <Modal
                isOpen={this.state.isPurchasing}
                onClose={this.purchaseCanceldHandler}
            >
                {modalBody}
            </Modal>
        )
    }

    renderBurger = () => {
        const {
            ingredients,
            purchasable,
            totalPrice
        } = this.state;

        const burgerProps = {
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
                <Burger {...burgerProps}/>
                <BuildControls {...buildControlsProps}/>
            </Aux>
        );
    }

    render() {

        return (
            <Aux>
                {this.renderSummaryModal()}
                {this.renderBurger()}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, burgerAPI);