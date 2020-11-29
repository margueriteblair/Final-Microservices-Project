import React, {useState} from 'react'
import Form from './Form'

import {loginReq} from '../utils/userRequests';
import {loginInputs} from '../utils/userInputs';

export default function Login(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const regLink = '/register';

    return (
        <div>
            
            <br></br>
            <Form
            id="loginForm"
            inputs={loginInputs}
            title="Login to Your Account!"
            submitFunc={loginReq}
            ></Form>
            <button onClick={()=>{window.location = regLink}}>Need an Account? Register</button>
        </div>
    )

}
