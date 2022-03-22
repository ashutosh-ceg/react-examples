import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import "../UI/Card.css";
import ExpenseDate from "./ExpanseDate";

const ExpenseItem = (props) => {
  // const expenseDate= new Date(2022,3,6);
  // const ExpenseItem="Grocery";
  // const expenseAmount=299.90;
  // const [title,setTitle] = useState(props.title);
  // console.log(title);
  // const clickHandler = () => {
  //   setTitle("Updated");
  //   console.log("Button is clicked");
  // };

  return (
    <Card className="expense-item">
       <ExpenseDate date={props.date} /> 
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
       <button >Add Item</button>
    </Card>
  );
};
export default ExpenseItem;
