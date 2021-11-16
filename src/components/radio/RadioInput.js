import React from 'react'
import  './RadioInput.css'
const RadioInput = ({handleChange,icon,label,value, ...others}) => {    
    return (
        <div className="col  mode">
            <input type="radio" onChange={handleChange} className="mr-5" {...others} />
            <label for="mode">{label}</label>
            <i class={icon} aria-hidden="true"></i>

        </div>
           
    )
}

export default RadioInput
