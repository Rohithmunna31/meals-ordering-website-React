import React,{Fragment} from "react";
import "./header.css";
import HeaderCartButton from "./headerCartButton";

const Header =()=>{
    return (<Fragment>
        <header className="header">
            <h1>ReactMeals</h1>
            <HeaderCartButton></HeaderCartButton>
        </header>

        <div>
            <img alt="img loading"></img>
        </div>
        </Fragment>);
}

export default Header;

