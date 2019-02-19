
import React from 'react';
import styles from './overlay.scss';

const Overlay = (props) => (
    props.isOpen ? <div className={styles.overlay} onClick={props.clicked}></div> : null
);

export default Overlay;