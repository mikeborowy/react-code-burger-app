import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ingredient.scss';
import { ingredientsConst } from '../../../../../constants/index';

class Ingredient extends PureComponent {

    static propTypes = {
        type: PropTypes.string.isRequired
    }

    render() {
    let ingredient = null;

    switch (this.props.type) {
        case ingredientsConst.BREAD_BOTTOM:
            ingredient = (
                <div className={styles[ingredientsConst.BREAD_BOTTOM]}>
                    
                </div>
            );
            break;
        case ingredientsConst.BREAD_TOP:
            ingredient = (
                <div className={styles[ingredientsConst.BREAD_TOP]}>
                    <div className={styles['seeds-1']}></div>
                    <div className={styles['seeds-2']}></div>
                </div>
            );
            break;
        case ingredientsConst.MEAT:
            ingredient = (
                <div className={styles[ingredientsConst.MEAT]}>
                    
                </div>
            );
            break;
        case ingredientsConst.CHEESE:
            ingredient = (
                <div className={styles[ingredientsConst.CHEESE]}>
                    
                </div>
            );
            break;
        case ingredientsConst.SALAD:
            ingredient = (
                <div className={styles[ingredientsConst.SALAD]}>
                    
                </div>
            );
            break;
        case ingredientsConst.BACON:
            ingredient = (
                <div className={styles[ingredientsConst.BACON]}>
                    
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