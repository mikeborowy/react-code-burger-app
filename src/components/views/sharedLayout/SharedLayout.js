import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './sharedLayout.scss';
const SharedLayout = (props) => {
    return (
        <Aux>
            <div>
                Toolbar
            </div>
            <main className={styles.main}>
                {props.children}
            </main>
        </Aux>
    );
};

export default SharedLayout;