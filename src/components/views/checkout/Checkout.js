import React, { Component } from 'react';
import CheckoutSummary from './checkoutSummary/CheckoutSummary';
import { INGREDIENTS_INIT_DATA } from '../../../constants/initData';
import { NAV_ITEMS } from '../../../constants/navigationItems';

class Checkout extends Component {

    state = {
        ingredients: INGREDIENTS_INIT_DATA
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }

        this.setState({ingredients});
    }

    checkoutContinueHandler = () => {
        this.props.history.replace(`${NAV_ITEMS.CHECKOUT.LINK}/contact-data`);
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    onCheckoutContinue={this.checkoutContinueHandler}
                    onCheckoutCancel={this.checkoutCancelHandler}
                />
            </div>
        );
    }
}

export default Checkout;