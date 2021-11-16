import React from 'react'

const TextInput = ({handleChange, ...others}) => {
    return (
        <input onChange={handleChange} {...others} class="form-control"  />
       
    )
}

export default TextInput
