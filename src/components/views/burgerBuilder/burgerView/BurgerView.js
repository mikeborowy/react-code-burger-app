import React from 'react';
import PropTypes from 'prop-types';
import styles from './burgerView.scss';
import Ingredient from '../ingredient/Ingredient';
import { INGREDIENTS } from '../../../../constants/index';

const propTypes = {
    ingredients: PropTypes.object.isRequired
}

const BurgerView = (props) => {

    let renderIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array( props.ingredients[ingKey] )].map((_, idx) => {
                        return (
                            <Ingredient 
                                key={ingKey + '_' + idx} 
                                type={ingKey} 
                            />
                        )
                    })
        })
        .reduce((acc, item) => {
            return acc.concat(item)
        }, []);

    // if (renderIngredients.length === 0) renderIngredients = <p>Please add ingredients</p>;

    return (
        <div className={styles.Burger}>
            <Ingredient type={INGREDIENTS.BREAD_TOP}/>
            {renderIngredients}
            <Ingredient type={INGREDIENTS.BREAD_BOTTOM}/>
        </div>
    );
};

BurgerView.propTypes = propTypes;

export default BurgerView;