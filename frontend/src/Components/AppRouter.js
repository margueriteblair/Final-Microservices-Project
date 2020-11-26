import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';

export default function AppRouter() {
    return (
        <div>
            <Switch>
                <Route
                path="/" exact
                ></Route>
                <Route
                exact path = '/login'
                ><Login/>
                </Route>
                <Route
                exact path = '/register'
                ><Register/></Route>
            </Switch>
        </div>
    )
}
