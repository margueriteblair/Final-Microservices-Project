import React from 'react'
import useUserData from '../Hooks/useUserData';


export default function Home(props) {
    const [loggedIn, userName] = useUserData(); 
    const loginLink = '/login';
    const registerLink = '/register'
    if (loggedIn) {
        return (
            <div>
                <h1>Welcome, {userName}</h1>
            </div>
        )
    } else {
    return (
        <div className="homepageButtons">
            <h1>Welcome to my application!</h1>
            <button onClick={() => {window.location.href = loginLink}}>Login</button>
            <button onClick={() => {window.location.href = registerLink}}>Register</button>
        </div>
    )
    }
}
