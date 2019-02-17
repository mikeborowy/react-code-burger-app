import React from 'react';
import styles from './modal.scss';

const Modal = (props) => {

    let style = {};
    style = {
        ...style, 
        transform: props.isOpen ? 'translateY(0)' : 'translate(-100vh)',
        opacity:  props.isOpen ? '1' : '0'
    };

    return (
        <div 
            className={styles.Modal}
            style={style}
        >
            {props.children}
        </div>
    );
};

export default Modal;