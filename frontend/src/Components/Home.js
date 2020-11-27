import React from 'react'

export default function Home(props) {
    const loginLink = '/login';
    const registerLink = '/register'
    if (props.loggedIn) {
        return (
            <div>
                <h1>Welcome, {props.user}</h1>
            </div>
        )
    } else {
    return (

        <div className="homepageButtons">
            <h1>Welcome to my application, bitch!</h1>
            <button onClick={() => {window.location.href = loginLink}}>Login</button>
            <button onClick={() => {window.location.href = registerLink}}>Register</button>
        </div>
    )
    }
}
