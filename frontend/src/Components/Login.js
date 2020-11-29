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
    // const user = loginReq(document.getElementById("loginForm"));

    // const handleLogin = () => {
    //     setError(null);
    //     setLoading(true);
    //     axios.post('http://localhost:3399/user/login', user).then(response => {
    //         setLoading(false);
    //         setLocalSession(response.data.token, response.data.user);
    //         props.history.push("/dashboard");
    //     }).catch(error => {
    //         setLoading(false);
    //         if (error.response.status === 401) {
    //             setError(error.response.data.message);
    //         } else {
    //             setError("Something went wrong. Please try again later");
    //         }
    //     })

    // }
    return (
        <div>
            
            <br></br>
            <Form
            id="loginForm"
            inputs={loginInputs}
            title="Login to Your Account!"
            submitFunc={loginReq}
            ></Form>
            
        </div>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value, onChange: handleChange
    }
}
