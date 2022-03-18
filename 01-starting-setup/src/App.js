import React, {useState} from 'react';
//import React from "react";
import Expanses from "./components/Expenses/Expanses";
import NewExpanse from "./components/NewExpanse/NewExpanse";
//import { useState } from "react/cjs/react.production.min";

const DUMMY_EXPENSE = [
  {
    title: "Soap",
    amount: 299,
   // date: new Date(2019, 1, 1),
  },
  {
    title: "Sugar",
    amount: 400,
    //date: new Date(2020, 2, 4),
  },
  {
    title: "Flour",
    amount: 300,
    //date: new Date(2021, 3, 6),
  },
  {
    title: "Oil",
    amount: 4000,
    //date: new Date(2022, 5, 5),
  },
];


const App = () => {
  //   const para = document.createElement('p');
  // para.textContent="This is another paragraph";
  // document.getElementById("root").append(para);
  
  const [expenses,setExpenses]=useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log("Recived data "+expense);
    console.log("Old data "+expenses);
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
    console.log("Updated data "+expenses);
  };
  return (
    <div>
      <NewExpanse onAddExpense={addExpenseHandler} />
      <Expanses item={expenses} />
    </div>
  );

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},'Lets get Started'),
  //   React.createElement(Expanses, { item:expense})
  // );
};

export default App;
