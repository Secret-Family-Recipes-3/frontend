import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

function App() {

  const [value, setValue] = useState()

  const onChange = event => {
    const name = event.target.name
    const fieldValue = event.target.value
    
    console.log(`${name}: ${value}`)

    setValue({...value, [name]: fieldValue})
  }

  const submitLogin = event => {
    event.preventDefault()
    
    console.log(`email: ${value.email}, password: ${value.password}`)
  }

  return (
    <div className="App">
      <Switch>
        <Route to='/login'>
          <Login onChange={onChange}
          submitLogin={submitLogin} />
        </Route>

        <Route to='/register'>
          <Register onChange={onChange} />
        </Route>
        
        <Route to='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
