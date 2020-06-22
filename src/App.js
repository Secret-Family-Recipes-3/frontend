import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        Sample col md 6
                    </div>
                    <div className="col-md-6">
                        Sample col md 6
                    </div>
                </div>
            </div>
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
