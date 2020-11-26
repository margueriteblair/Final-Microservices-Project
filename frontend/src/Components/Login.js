import React from 'react'
import Form from './Form'

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
                    <button text="Return home" onClick={() => {window.location = '/'}}></button>
                </div>
            ) : (
                <div>
                    <p>No Account?</p>
                    <button text="Register Button" onClick={() => {window.location=regLink}}></button>
                </div>
            )}
        </div>
    )
}
