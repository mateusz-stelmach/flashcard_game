import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro';
import App from './App'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'




ReactDOM.render(
  <React.StrictMode>
    <Router>      
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/app" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


