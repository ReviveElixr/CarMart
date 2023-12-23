import React from 'react';

import LoginPage from './components/login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/home'
import Login from  './components/login';
import Registration from './components/signUp';

function App() {
  return (
    <>
      

      <Router>
        <div>
          

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/login" component= {Login} />
            <Route path="/signUp" component={Registration} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
