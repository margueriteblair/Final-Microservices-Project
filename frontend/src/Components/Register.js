import React from 'react'
import Form from './Form';
import {regInputs} from '../utils/userInputs';
import {regRequest} from '../utils/userRequests';

export default function Register() {
    const loginLink = '/login';
    return (
        <div>
            <h1>Create a New Account</h1>
            <br></br>
            <Form
            id="registerForm"
            title="Register"
            inputs={regInputs}
            submitFunc={regRequest}
            ></Form>
            <button onClick={()=>{window.location = loginLink}}>Already Have an Account? Login</button>
        </div>
    )
}
