import React, { Component } from 'react';
import withAux from '../hoc/aux/withAux';
import styles from './sharedLayout.scss';
import Toolbar from './navigation/toolbar/Toolbar';
import SideDrawer from './navigation/sideDrawer/SideDrawer';
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
            <withAux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}
                />
                <main className={styles.main}>
                    {this.props.children}
                </main>
            </withAux>
        );
    }
};

export default SharedLayout;