import React from 'react';

import classes from './navigationItems.scss';
import NavigationItem from './NavigationItem';

const navigationItems = () => (
    <ul className={classes.navigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;