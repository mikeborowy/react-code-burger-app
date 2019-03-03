import React, { Component } from 'react';
import Aux from '../hoc/aux/Aux';
import styles from './sharedLayout.scss';
import Toolbar from './toolbar/Toolbar';
import SideMenu from './sideMenu/SideMenu';
class SharedLayout extends Component {

    state = {
        showSideMenu: false
    }

    sideMenuCloseHandler = () => {
        this.setState({ showSideMenu: false });
    }

    sideMenuToggleHandler = () => {
        this.setState(prevState => ({ showSideMenu: !prevState.showSideMenu }));
    }

    render(){
        console.log(this.props.showSideMenu)
        return (
            <Aux>
                <Toolbar onSideMenuToggle={this.sideMenuToggleHandler}/>
                <SideMenu
                    open={this.state.showSideMenu}
                    onClose={this.sideMenuCloseHandler}
                />
                <main className={styles.main}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default SharedLayout;