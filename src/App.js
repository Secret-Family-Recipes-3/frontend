import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './utils/privateRoute';
import TopPanel from './components/TopPanel/TopPanel';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

function App () {
    // check if login 
    const token = localStorage.getItem('loginToken');
    const [loggedIn, setLoggedIn] = useState(Boolean(token));

    return (
        <>
            <TopPanel loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Switch>
                <PrivateRoute exact path="/" component={RecipeList} />
                <PrivateRoute exact path="/recipes" component={RecipeList} />

                <Route path='/login'>
                    <Login setLoggedIn={setLoggedIn} />
                </Route>

                <Route path='/register'>
                    <Register setLoggedIn={setLoggedIn} />
                </Route>
                
                <PrivateRoute path="/recipes/:id" component={RecipeDetails} />
                
            </Switch>
        </>
    );
}

export default App;
