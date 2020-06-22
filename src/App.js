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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
