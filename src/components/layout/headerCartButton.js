import React,{useContext} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton =(props)=>{

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber,items)=>{
        return curNumber+items.amount;
    },0);

    return (
        <button className="button" onClick={props.onClick}>
            <span>
                <img alt=""></img>
            </span>
            <span>Cart</span>
            <span> {numberOfCartItems} </span>
        </button>
    )
}

export default HeaderCartButton;
