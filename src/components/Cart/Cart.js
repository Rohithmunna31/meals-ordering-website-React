import React,{useContext} from "react";
import Modal from "../UI/modal";
import "./Cart.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart =(props)=>{
    
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount}`;
    const hasItems = cartCtx.items.length >0;

    const cartItemRemoveHandler = (id)=>{};

    const cartItemAddHandler = (item)=>{};

    const CartItems = (
        <ul className="cart-items">
            {cartCtx.map((item)=>(
                <CartItem key={item.id} name={item.name} amount={item.amount} 
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null,item.id)}
                onAdd={cartItemAddHandler.bind(null,item)} ></CartItem>
            ))
            }
        </ul>
    )
    
    return (
    <Modal onClose={props.onClose} >
    {CartItems}
    <div className="total">
        <span> Total Amount</span>
        <span> {totalAmount} </span>
    </div>
    <div className="actions">
        <button className="button--alt" onClick={props.onClose}> close</button>
        { hasItems &&  <button className="button"> order</button>}
    </div>
    </Modal> )
}

export default Cart;