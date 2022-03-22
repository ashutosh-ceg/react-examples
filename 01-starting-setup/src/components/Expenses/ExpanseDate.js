import React from 'react';
import './ExpanseDate.css';
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
 // var start = new Date(props.date);
 //var year = start.getFullYear();
  //var date=props.date.value;
  console.log("In ExpanseDate component ");
  console.log("Date "+day+"year "+year);
  //var year = date.getFullYear();
  //console.log("year "+ (props.date).value);
  //const year = ((props.date).value).getFullYear();
  //console.log("In ExpanseDate.js");
  console.log("Month "+month + "Day "+ day );
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
       <div className='expense-date__year'>{year}</div> 
       <div className='expense-date__day'>{day}</div>
    </div>
  );
}
export default ExpenseDate;
