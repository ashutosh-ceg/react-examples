import React from "react";
import "./NewExpanse.css";
import ExpanseForm from "./ExpanseForm";
const NewExpanse = (props) => {
// In enteredExpenseData we receive data from the ExpanseForm using props.onSaveExpenseData(expenseData);  
const saveExpenseDataHandler=(enteredExpenseData)=>{
 const expenseData={
   ...enteredExpenseData,
   id : Math.random().toString()
 }
 console.log(expenseData);
 props.onAddExpense(expenseData);
};

  return (
    <div className="new-expense">
      <ExpanseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpanse;
