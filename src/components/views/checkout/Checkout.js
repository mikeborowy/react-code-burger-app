import React, { Component } from 'react';
import CheckoutSummary from './checkoutSummary/CheckoutSummary';
import { INGREDIENTS_INIT_DATA } from '../../../constants/initData';

class Checkout extends Component {

    state = {
        ingredients: INGREDIENTS_INIT_DATA
    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default Checkout;