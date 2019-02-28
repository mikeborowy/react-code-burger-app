import React, { Component } from 'react';
import Aux from '../hoc/aux/Aux';
import styles from './sharedLayout.scss';
import Toolbar from './toolbar/Toolbar';
import SideDrawer from './sideDrawer/SideDrawer';
class SharedLayout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
    }

    render(){
        return (
            <Aux>
                <Toolbar onDrawerToggle={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    onSideDrawerClose={this.sideDrawerCloseHandler}
                />
                <main className={styles.main}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default SharedLayout;