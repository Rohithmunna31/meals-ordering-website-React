import React from "react";

const HeaderCartButton =(props)=>{
    return (
        <button className="button" onClick={props.onClick}>
            <span>
                <img alt=""></img>
            </span>
            <span>Cart</span>
            <span>3</span>
        </button>
    )
}

export default HeaderCartButton;
