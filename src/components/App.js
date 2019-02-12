import React, { Component } from 'react';
import SharedLayout from './views/sharedLayout/SharedLayout';
import BurgerBuilder from '../components/views/burgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <div className="App">
        <SharedLayout>
          <BurgerBuilder />
        </SharedLayout>
      </div>
    );
  }
}

export default App;
