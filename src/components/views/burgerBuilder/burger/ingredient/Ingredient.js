import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ingredient.scss';
import { ingrediets } from '../../../../../constants/index';

class Ingredient extends PureComponent {

    static propTypes = {
        type: PropTypes.string.isRequired
    }

    render() {
    let ingredient = null;

    switch (this.props.type) {
        case ingrediets.BREAD_BOTTOM:
            ingredient = (
                <div className={styles[ingrediets.BREAD_BOTTOM]}>
                    
                </div>
            );
            break;
        case ingrediets.BREAD_TOP:
            ingredient = (
                <div className={styles[ingrediets.BREAD_TOP]}>
                    <div className={styles.seeds-1}></div>
                    <div className={styles.seeds-2}></div>
                </div>
            );
            break;
        case ingrediets.MEAT:
            ingredient = (
                <div className={styles[ingrediets.MEAT]}>
                    
                </div>
            );
            break;
        case ingrediets.CHEESE:
            ingredient = (
                <div className={styles[ingrediets.CHEESE]}>
                    
                </div>
            );
            break;
        case ingrediets.SALAD:
            ingredient = (
                <div className={styles[ingrediets.SALAD]}>
                    
                </div>
            );
            break;
        case ingrediets.BACON:
            ingredient = (
                <div className={styles[ingrediets.BACON]}>
                    
                </div>
            );
            break;
        default:
            ingredient = null;
            break;
    }

    return ingredient;
    }
};

export default Ingredient;