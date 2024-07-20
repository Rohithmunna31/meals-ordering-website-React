import "./MealItemForm.css";
import React from "react";
import Input from "../../UI/input";

const MealItemForm =(props)=>{

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
    </form>
}

export default MealItemForm;