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
            <button text="Login" onClick={() => {window.location.href = loginLink}}></button>
            <button text="Login" onClick={() => {window.location.href = loginLink}}></button>
        </div>
    )
    }
}
