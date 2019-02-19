import React from 'react';
import styles from './toolbar.scss';
import Logo from '../../logo/Logo';

const Toolbar = (props) => {
    return (
        <header className={styles.toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                ...
            </nav>
        </header>
    );
};

export default Toolbar;