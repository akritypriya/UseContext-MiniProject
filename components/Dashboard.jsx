import React, { useState} from 'react';

function Dashboard({initialCount}){
    const[count,setCount]=useState(initialCount);

    const increment=()=>{
        setCount((prev)=>prev+1);
    }
    const decrement=()=>{
        setCount((prev)=>prev-1);
    }
    const reset=()=>{
        setCount(0);
    }
    const switchSign=()=>{
        setCount((prev)=>prev * -1);
    }

   return(
    <div>
        <h1>Count:{count}</h1>
        <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Restart</button>
        <button onClick={switchSign}>Sign Switch</button> 
        </div>
    </div>
   )
}
export default Dashboard;