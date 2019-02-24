import React from 'react';

import Logo from '../../../common/logo/Logo';
import NavigationItems from '../../../common/navigationItems/NavigationItems';
import classes from './sideDrawer.scss';
import Overlay from '../../../common/overlay/Overlay';
import Aux from '../../../hoc/aux/Aux';

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