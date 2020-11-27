import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';

export default function AppRouter() {
    return (
        <div>
        <BrowserRouter>
            <Switch>
                <Route
                path="/" exact
                ><Home/></Route>
                <Route
                exact path = '/login'
                ><Login/>
                </Route>
                <Route
                exact path = '/register'
                ><Register/></Route>
            </Switch>
        </BrowserRouter>
        </div>
    )
}
