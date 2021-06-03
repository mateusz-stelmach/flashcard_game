import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro';
import App from './App'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';




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


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
