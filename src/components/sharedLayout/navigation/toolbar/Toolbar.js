import React from 'react';
import styles from './toolbar.scss';
import Logo from '../../../common/logo/Logo';
import NavigationItems from '../../../common/navigationItems/NavigationItems';
import DrawerToggle from './drawerToggle/DrawerToggle';

const Toolbar = (props) => {
    return (
        <header className={styles.toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={styles.logo}>
                <Logo />
            </div>
            <nav className={styles.desktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;