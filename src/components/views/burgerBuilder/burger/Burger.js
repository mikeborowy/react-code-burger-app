import React from 'react';
import styles from './burger.scss';
import Ingredient from './ingredient/Ingredient';
import { ingrediets } from '../../../../constants/index';

const Burger = () => {
    return (
        <div className={styles.burger}>
            <Ingredient type={ingrediets.BREAD_TOP}/>
            <Ingredient type={ingrediets.CHEESE}/>
            <Ingredient type={ingrediets.MEAT}/>
            <Ingredient type={ingrediets.BREAD_BOTTOM}/>
        </div>
    );
};

export default Burger;