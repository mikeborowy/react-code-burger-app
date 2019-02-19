import React from 'react';
import Aux from '../hoc/Aux';
import styles from './sharedLayout.scss';
import Toolbar from './navigation/toolbar/Toolbar';
const SharedLayout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main className={styles.main}>
                {props.children}
            </main>
        </Aux>
    );
};

export default SharedLayout;