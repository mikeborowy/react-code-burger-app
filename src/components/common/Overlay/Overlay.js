
import React from 'react';
import styles from './overlay.scss';

const Overlay = (props) => (
    props.isOpen ? <div className={styles.Overlay}></div> : null
);

export default Overlay;