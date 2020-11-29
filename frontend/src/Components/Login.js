import React, {useState} from 'react'
import Form from './Form'
import axios from 'axios';
import {setUserSession} from '../utils/Common';

import {loginReq} from '../utils/userRequests';
import {loginInputs} from '../utils/userInputs';

export default function Login(props) {
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
