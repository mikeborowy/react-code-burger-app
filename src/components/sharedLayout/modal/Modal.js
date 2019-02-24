import React from 'react';
import styles from './modal.scss';
import withAux from '../../hoc/aux/withAux';
import Overlay from '../../common/overlay/Overlay';

const Modal = (props) => {

    let style = {};
    style = {
        ...style,
        transform: props.isOpen ? 'translateY(0)' : 'translate(-100vh)',
        opacity:  props.isOpen ? '1' : '0'
    };

    return (
        <withAux>
            <Overlay isOpen={props.isOpen}/>
            <div
                className={styles.modal}
                style={style}
            >
                {props.children}
            </div>
        </withAux>
    );
};

export default Modal;