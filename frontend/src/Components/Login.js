import React, {useState} from 'react'
import Form from './Form'
import Button from '.Button';
import axios from 'axios';
import {setLocalSession} from '../utils/Common';

import {loginReq} from '../utils/userRequests';
import {loginInputs} from '../utils/userInputs';

export default function Login(props) {
    const [loading, setLoading] = useState(false);
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
            <Button onClick={window.location = regLink}></Button>
        </div>
    )

}
