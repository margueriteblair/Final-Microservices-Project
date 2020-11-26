import React from 'react'
import Input from './Input';

export default function Form(props) {
    const buttonOnClick = () => {
        props.submitFunc(document.getElementById(props.id));
    }
    return (
        <div>
            <h2>{props.title}</h2>
            <form
            id={props.id}
            >

                {
                    Array.isArray(props.inputs) ? props.inputs.map(inProps =>{
                        <Input
                    name={inProps.name}
                    placeholder={inProps.placeholder}
                    type={inProps.type}
                    style={inProps.style}
                    id={inProps.id}
                    onChange={inProps.onChange}
                    key={inProps.name}
                    ></Input>
                    }) : 'Dev Warning! No inputs, check code.'
                    
                }
            </form>
            <button text="Submit" onClick={buttonOnClick}></button>
        </div>
    )
}
