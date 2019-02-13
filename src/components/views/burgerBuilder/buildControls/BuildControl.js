import React from 'react';
import styles from './controls.scss';

const BuildControl = (props) => {
    return (
        <div className={styles.BuildControl}>
             <div className={styles.Label}>{props.label}</div>
             <button className={styles.Less}>Less</button>
             <button className={styles.More} onClick={props.onAddIngredient}>More</button>
        </div>
    );
};

export default BuildControl;