import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

import './App.scss'
import LogReg from './components/login';

function App() {
  return (
    <div className="App">
      <h1>This is the APP</h1>
    </div>
  );
}

const Root = () =>
  (<Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path='/login' component={LogReg} />
      <Route exact path='/register' component={LogReg} />
    </Switch>
  </Router>)


export default Root;
