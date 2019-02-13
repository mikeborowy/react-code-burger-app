import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import BurgerView from '../burgerBuilder/burgerView/BurgerView';
import BuildControls from '../burgerBuilder/buildControls/BuildControls';
import { INGREDIENTS_PRICES } from '../../../constants/index';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0
    }

    addIngredientHandler = (type) => {
        debugger
        const updatedIngredient = this.state.ingredients[type] + 1;
        const ingredients = {...this.state.ingredients, [type]: updatedIngredient };
        const totalPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];
        this.setState({ ingredients, totalPrice })
    }
    
    removeIngredientHandler = (type) => {}

    render() {
        return (
            <Aux>
                <BurgerView ingredients={this.state.ingredients}/>
                <BuildControls onAddIngredient={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;