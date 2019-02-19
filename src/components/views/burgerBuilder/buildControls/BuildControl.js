import React from 'react';
import styles from './buildControls.scss';

const BuildControl = (props) => {
    return (
        <div className={styles.buildControl}>
             <div className={styles.label}>{props.label}</div>
             <button
                className={styles.less}
                onClick={props.removeIngredient}
                disabled={props.disabled}    
            >
            Less
            </button>
             <button
                className={styles.more}
                onClick={props.addIngredient}
             >
             More
             </button>
        </div>
    );
};

export default BuildControl;