import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../burgerBuilder/burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;