import './ExpanseDate.css'
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  //console.log("year "+ (props.date).value);
  //const year = ((props.date).value).getFullYear();
  console.log("In ExpanseDate.js");
  console.log("Month "+month + "Day "+ day );
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
       <div className='expense-date__year'>{year}</div> 
    </div>
  );
}
export default ExpenseDate;
