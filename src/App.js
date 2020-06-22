import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to='/login'>
          <Login />
        </Route>

        <Route to='/register'>
          <Register />
        </Route>
        
        <Route to='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
