import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const dummyMeals = [
    {
        id:"m1",
        name:"shushi",
        description:"Finest fish and veggies",
        price:25,
    },
    {
        id:"m2",
        name:"schnitzel",
        description:"A german special dish",
        price:50,
    },
    {
        id:"m3",
        name:"pizza",
        description:"pachi poina rotte meedha madipoina kuragayalu",
        price:100,
    }
];

const AvailableMeals =()=>{

    const mealsList = dummyMeals.map((meal)=>{
        return <li> <MealItem key={meal.id} 
        id={meal.id}
        name={meal.name} 
        description={meal.description} 
        price={meal.price} > </MealItem> </li>
    });

    return (
        <section>
            <Card>
            <ul> {mealsList} </ul>
            </Card>
        </section>
    )
}


export default AvailableMeals;