import React from 'react'

export default function Input(props) {
    return (
        <input
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        style={{width:300, height: 50}}
        ></input>
    )
}
