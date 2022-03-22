import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expanses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expanses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    console.log("In Expanse.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expanses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

           {props.item.map((expense)=>(
             <ExpenseItem
             title={expense.title}
             amount={expense.amount}
             date={expense.date}
           ></ExpenseItem>
           ))}

        {/* <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expanses;
