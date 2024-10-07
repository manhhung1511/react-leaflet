import React, { useRef, useState } from 'react';

const Timer = () => {
    console.log("fuction called....");
    let counter = 0;
    let [myState, setMyState] = useState("A");
  
    let updateState = () => {
      let value = counter + 1;
      setMyState(myState + "-u-");
      console.log("counter: "+ value);
    }
  
    return (
      <div >
        <div>
          <div>MyState : {myState}</div>
          <input type="button" onClick = {() => updateState()} value="Update State"></input>
        </div>
      </div>
    );
};

export default Timer;