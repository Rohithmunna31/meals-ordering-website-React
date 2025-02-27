import { useRef ,useState} from "react";
import "./MealItemForm.css";
import React from "react";
import Input from "../../UI/input";

const MealItemForm =(props)=>{
    const [amountIsValid,setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitItemHandler = event=>{
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length ===0 ||
         enteredAmountNumber<1 ||
          enteredAmountNumber>5){
            setAmountIsValid(false);
            return; 
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return <form className="form">
        <Input label="amount" 
        input = {{
            id:"amount",
            type:'number',
            min:"1",
            max:'5',
            step:'1',
            defaultValue:'1'
        }
        }
        />
        <button> + Add </button>
        {!amountIsValid && <p> Please enter a valid amount (1-5). </p>}
    </form>
}

export default MealItemForm;