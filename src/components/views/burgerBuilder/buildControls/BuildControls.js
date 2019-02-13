import React from 'react';
import styles from './controls.scss';
import { capitalize } from '../../../helpers/index';
import { INGREDIENTS } from '../../../../constants/index';
import BuilderControl from './BuildControl';

const controls = [
    { label: capitalize(INGREDIENTS.BACON), type: INGREDIENTS.BACON},
    { label: capitalize(INGREDIENTS.CHEESE), type: INGREDIENTS.CHEESE},
    { label: capitalize(INGREDIENTS.MEAT), type: INGREDIENTS.MEAT},
    { label: capitalize(INGREDIENTS.SALAD), type: INGREDIENTS.SALAD}
]

const BuildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
           {controls.map(control => { 
               return (
                    <BuilderControl 
                        key={control.label}
                        label={control.label}
                        onAddIngredient={() => props.onAddIngredient(control.type)}
                    />
                )
           })}
        </div>
    );
};

export default BuildControls;