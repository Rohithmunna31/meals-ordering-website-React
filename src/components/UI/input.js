import React from "react";

import "./input.css";
const input=React.forwardRef((props,ref)=>{
    return <div className="input">
        <label htmlFor={props.input.id} > 
            {props.label}
        </label>
        <input ref={ref} {...props.id} />
    </div>
})

export default input;