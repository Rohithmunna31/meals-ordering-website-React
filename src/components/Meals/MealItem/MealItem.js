import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = props=>{

    const cartCtx = useContext(CartContext);
    const addToCardHandler = amount =>{
        cartCtx.addItem({
            id:props.id,
            name:props.id,
            amount:amount,
            price:props.price
        })
    }

    const price = `$${props.price.toFixed(2)}`;
    return (
    <li className="meal">
        <div>
            <h3> {props.name}</h3>
            <div className="description"> {props.description}</div>
            <div className="price"> {price} </div>
        </div>
        <div>
            <MealItemForm />
        </div>
    </li>
    )
}

export default MealItem;