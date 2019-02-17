import React from 'react';
import Aux from '../../../hoc/Aux';

const OrderSummary = (props) => {

    const renderSummaryList = Object.keys(props.ingredients)
        .map((ingredient, idx) => (
            <li key={`ing-${idx}`}>
                <span style={{textTransform:'capitalize'}}>
                    {ingredient}:
                </span>
                {` ${props.ingredients[ingredient]}`}
            </li>
        ));

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with:</p>
            <ul>
                {renderSummaryList}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    );
};

export default OrderSummary;