import React from 'react';

import classes from './navigationItems.scss';
import NavigationItem from './navigationItem/NavigationItem';
import { NAV_ITEMS } from '../../../constants/navigationItems';

const navigationItems = () => (
    <ul className={classes.navigationItems}>
        <NavigationItem 
            link={NAV_ITEMS.BUILDER.LINK} 
            active
        >
           {NAV_ITEMS.BUILDER.NAME}
        </NavigationItem>
        <NavigationItem 
            link={NAV_ITEMS.CHECKOUT.LINK}
        >
           {NAV_ITEMS.CHECKOUT.NAME}
        </NavigationItem>
    </ul>
);

export default navigationItems;