import React, { Component } from 'react';

import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';

import NavigationBar from './components/navigationBar';
import HomePage from './view/homePage';
import TermoPage from './view/termoPage';
import OzePage from './view/ozePage';
import PonePage from './view/ponePage';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/termomodernizacja" component={TermoPage} />
            <Route path="/oze" component={OzePage} />
            <Route path="/pone" component={PonePage} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
