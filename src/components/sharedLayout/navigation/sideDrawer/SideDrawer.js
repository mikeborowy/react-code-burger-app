import React from 'react';

import Logo from '../../../common/logo/Logo';
import NavigationItems from '../../../common/navigationItems/NavigationItems';
import classes from './sideDrawer.scss';
import Overlay from '../../../common/overlay/Overlay';
import withAux from '../../../hoc/aux/withAux';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.sideDrawer, classes.close];
    if (props.open) {
        attachedClasses = [classes.sideDrawer, classes.open];
    }
    return (
        <withAux>
            <Overlay isOpen={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </withAux>
    );
};

export default sideDrawer;