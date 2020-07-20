import React from 'react';
import './App.css';
import Login from './components/login'
import Dashboard from './components/userDashboard'
import UserDetails from './components/userDetails'
import PrivateRoute from './auth/privateRoute'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Redirect path='/' exact to='/login' />
          <Route path='/login' exact component={Login} />

          <PrivateRoute path='/users/:id' exact component={UserDetails} />
          <PrivateRoute path='/users' exact component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
