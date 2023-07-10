import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/welcome" component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default App;
