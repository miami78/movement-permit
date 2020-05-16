import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';

class App extends React.Component {
  render() {
      return (
        <div>
          <Header />
          <Switch>
            <Route exact path='/' />
            <Route path='/exempted' />
            <Route path='/faq' />
          </Switch>
        </div>
      );
    }
}

export default App;
