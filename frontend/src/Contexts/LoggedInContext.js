import React, {useState, useEffect} from 'react'
import {set, get} from '../utils/localStorage'

export default function LoggedInContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(() => {
        return get("logged-in-status", false);
    })

    useEffect(() => {
        setLoggedIn("logged-in-status", JSON.stringify(loggedIn))
    }, [loggedIn])

    return (
        <div>
            
        </div>
    )
}
