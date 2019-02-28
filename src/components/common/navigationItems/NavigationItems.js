import React from 'react';

import classes from './navigationItems.scss';
import NavigationItem from './navigationItem/NavigationItem';
import { NAV_LINKS } from '../../../constants/navLinks';

const navigationItems = () => (
    <ul className={classes.navigationItems}>
        <NavigationItem 
            link={NAV_LINKS.BUILDER.LINK} 
            active
        >
           {NAV_LINKS.BUILDER.NAME}
        </NavigationItem>
        <NavigationItem 
            link={NAV_LINKS.CHECKOUT.LINK}
        >
           {NAV_LINKS.CHECKOUT.NAME}
        </NavigationItem>
    </ul>
);

export default navigationItems;