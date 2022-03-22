import React, { useState } from "react";
//import React from "react";
import "./ExpanseForm.css";


const ExpanseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput]=useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:'',
  // });

  const titleChangedHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value,
    // });

    setEnteredTitle(event.target.value);
    //console.log(event);
    console.log(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };

  const dateChangedHandler = (event) => {
    // setEnteredDate(event.target.value);
    setEnteredDate(event.target.value);
    console.log("user inputed date"+typeof(event.target.value));
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };
    console.log(expenseData);
    //props.onSaveExpenseData(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpanseForm;
