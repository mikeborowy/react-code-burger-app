import React, { Component } from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import { history } from '../helpers/index';

import SharedLayout from './sharedLayout/SharedLayout';
import BurgerBuilder from '../components/views/burgerBuilder/BurgerBuilder';
import Checkout from '../components/views/checkout/Checkout';

import { NAV_ITEMS } from '../constants/navigationItems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
            <SharedLayout>
              <Switch>
                <Route 
                  path={NAV_ITEMS.BUILDER.LINK}
                  component={BurgerBuilder}
                  exact 
                />
                <Route
                  path={NAV_ITEMS.CHECKOUT.LINK}
                  component={Checkout}
                />
              </Switch>
            </SharedLayout>
        </Router>
      </div>
    );
  }
}

export default App;