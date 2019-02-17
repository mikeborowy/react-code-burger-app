import React from 'react';
import styles from './buildControls.scss';
import { capitalize } from '../../../helpers/index';
import { INGREDIENTS } from '../../../../constants/ingredients';
import BuilderControl from './BuildControl';

const controls = [
    { label: capitalize(INGREDIENTS.BACON), type: INGREDIENTS.BACON},
    { label: capitalize(INGREDIENTS.CHEESE), type: INGREDIENTS.CHEESE},
    { label: capitalize(INGREDIENTS.MEAT), type: INGREDIENTS.MEAT},
    { label: capitalize(INGREDIENTS.SALAD), type: INGREDIENTS.SALAD}
]

const BuildControls = (props) => {

    const orderBtnProps = {
        className: styles.OrderButton,
        disabled: !props.purchasable,
        onClick: props.purchasing
    }

    const renderControls = controls.map(control => (
        <BuilderControl
            key={control.label}
            label={control.label}
            disabled={props.disabled[control.type]}
            addIngredient={() => props.addIngredient(control.type)}
            removeIngredient={() => props.removeIngredient(control.type)}
        />
    ))

    return (
        <div className={styles.BuildControls}>
            <p>Current price:
                <strong>
                    {props.totalPrice.toFixed(2)}
                </strong>
            </p>
           {renderControls}
           <button {...orderBtnProps} >ORDER NOW</button>
        </div>
    );
};

export default BuildControls;