import React, { Component } from 'react';
// HOC
import Aux from '../../hoc/Aux';
// COMPONENTS
import BuildControls from '../burgerBuilder/buildControls/BuildControls';
import BurgerView from '../burgerBuilder/burgerView/BurgerView';
import Modal from '../../sharedLayout/modal/Modal';
import OrderSummary from './orderSummary/OrderSummary';
// CONST/ENUMS
import { INGREDIENTS_PRICES } from '../../../constants/ingredients';

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
        purchasing: false
    }

    /**
     * HANDLERS 
     */

    addIngredientHandler = (type) => this.updateIngredient(type, 1);
        
    removeIngredientHandler = (type) => this.updateIngredient(type, -1);

    purchasingHandler = () => this.setState({ purchasing: true });
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

    renderSummaryModal = () => (
        <Modal isOpen={this.state.purchasing}>
            <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
    )

    render() {

        const buildControlsProps = {
            purchasable: this.state.purchasable,
            totalPrice: this.state.totalPrice,
            disabled: this.chckIfDisabled(),
            addIngredient: this.addIngredientHandler,
            removeIngredient: this.removeIngredientHandler,
            purchasing: this.purchasingHandler
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

export default BurgerBuilder;