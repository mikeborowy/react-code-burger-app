import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger.scss';
import Ingredient from '../ingredient/Ingredient';
import { ingredientsConst } from '../../../../constants/index';

const propTypes = {
    ingredients: PropTypes.object.isRequired
}

const Burger = (props) => {
    const { ingredients } = props;

    const renderIngredients = () => Object
        .keys(ingredients)
        .map(ingKey => {
            return [...Array(ingredients[ingKey])].map((_, idx) => {
                        return (
                            <Ingredient 
                                key={ingKey + idx} 
                                type={ingKey} 
                            />
                        )
                    })
        })

    return (
        <div className={styles.burger}>
            <Ingredient type={ingredientsConst.BREAD_TOP}/>
            {renderIngredients()}
            <Ingredient type={ingredientsConst.BREAD_BOTTOM}/>
        </div>
    );
};

Burger.propTypes = propTypes;

export default Burger;