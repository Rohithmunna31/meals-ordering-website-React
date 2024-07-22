import React from "react";
import Modal from "../UI/modal";
import "./Cart.css";
const Cart =(props)=>{
    
    const CartItems = (
        <ul className="cart-items">
            {[{id:'c1',name:'shusi',amount:2,price:12.99}].map((item)=>(
                <li> {item.name}</li>
            ))
            }
        </ul>
    )
    
    return (
    <Modal onClose={props.onClose} >
    {CartItems}
    <div className="total">
        <span> Total Amount</span>
        <span> 35.62</span>
    </div>
    <div className="actions">
        <button className="button--alt" onClick={props.onClose}> close</button>
        <button className="button"> order</button>
    </div>
    </Modal> )
}

export default Cart;