import React, {useState} from 'react'
import Form from './Form'
import axios from 'axios';
import {setLocalSession} from '../utils/Common';

import {loginReq} from '../utils/userRequests';
import {loginInputs} from '../utils/userInputs';

export default function Login(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const regLink = '/register';

    const handleLogin = () => {
        setError(null);
        setLoading(true);
        loginReq();
        
    }
    return (
        <div>
            <br></br>
            <Form
            id="loginForm"
            inputs={loginInputs}
            title="Login to Your Account!"
            submitFunc={handleLogin}
            ></Form>
            {props.loggedIn ? (
                <div>
                    <p>Already signed in!</p>
                    <button onClick={() => {window.location = '/'}}>Return to Homepage</button>
                </div>
            ) : (
                <div>
                    <p>No Account?</p>
                    <button onClick={() => {window.location=regLink}}>Register Here</button>
                </div>
            )}
        </div>
    )
}
