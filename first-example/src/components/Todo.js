import {useState} from 'react';
import Change from './Change';
function Todo(props) {
  const [objData, objFunction ] = useState(['text', 1]);
  console.log(objData)
  // function innerFunction(){
  //   console.log("log data:", {objData});
  //   objFunction(true);
  //   console.log("log data:", {objData});
  // }
  function falseHandler(){
    objFunction({'key':'value'});
  }
  function trueHandler(){
    objFunction(true);
  }
  
  return (
    <div>
      <div>
        <h1> {props.text}</h1>
        
        {/* {console.log(objData)} <button onClick={<Change flaseval={falseHandle}/>}>True</button> */}
        {/* {console.log(objData)} */}
      </div>
    </div>
  );
}

export default Todo;
