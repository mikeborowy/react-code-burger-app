import React from 'react';
import styles from './modal.scss';
import Aux from '../../hoc/Aux';
import Overlay from '../../common/Overlay/Overlay';

const Modal = (props) => {

    let style = {};
    style = {
        ...style, 
        transform: props.isOpen ? 'translateY(0)' : 'translate(-100vh)',
        opacity:  props.isOpen ? '1' : '0'
    };

    return (
        <Aux>
            <Overlay isOpen={props.isOpen}/>
            <div 
                className={styles.Modal}
                style={style}
            >
                {props.children}
            </div>
        </Aux>
    );
};

export default Modal;