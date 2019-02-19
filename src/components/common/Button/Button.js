import React from 'react';
import styles from './button.scss';

const ModalButton = (props) => {

    const className = [styles.Button, styles[props.type]].join(' ');

    return (
        <button 
            className={className}
            onClick={props.onClickHandler}
        >
            {props.children}
        </button>
    );
};

export default ModalButton;