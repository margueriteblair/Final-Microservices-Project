import React from 'react'

export default function LoggedInHome(props) {
    return (
        <div>
            <h1>Welcome back, {props.user}</h1>
        </div>
    )
}
