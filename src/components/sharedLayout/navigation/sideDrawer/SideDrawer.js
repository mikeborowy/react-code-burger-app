import React from 'react';

import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import classes from './sideDrawer.scss';
import Overlay from '../../../common/overlay/Overlay';
import Aux from '../../../hoc/Aux';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.sideDrawer, classes.close];
    if (props.open) {
        attachedClasses = [classes.sideDrawer, classes.open];
    }
    return (
        <Aux>
            <Overlay isOpen={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;