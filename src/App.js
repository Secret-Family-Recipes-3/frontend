import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './utils/privateRoute';
import TopPanel from './components/TopPanel/TopPanel';
import RecipeList from './components/RecipeList/RecipeList';

function App () {

    const [value, setValue] = useState();

    const onChange = event => {
        const name = event.target.name;
        const fieldValue = event.target.value;
        
        console.log(`${name}: ${value}`);

        setValue({...value, [name]: fieldValue});
    }

    const submitLogin = event => {
        event.preventDefault();
        
        console.log(`email: ${value.email}, password: ${value.password}`);
    }

    return (
        <>
            <TopPanel />
            <Switch>
                <PrivateRoute exact path="/" component={RecipeList} />

                <Route path='/login'>
                    <Login onChange={onChange} submitLogin={submitLogin} />
                </Route>

                <Route path='/register'>
                    <Register onChange={onChange} />
                </Route>
                
                
            </Switch>
        </>
    );
}

export default App;
