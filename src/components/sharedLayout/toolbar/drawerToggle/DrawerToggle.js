import React from 'react';

import classes from './drawerToggle.scss';

const drawerToggle = (props) => (
    <div 
        className={classes.drawerToggle} 
        onClick={props.onDrawerToggle}
    >
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;