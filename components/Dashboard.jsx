import React, { useEffect, useState} from 'react';

function Dashboard({initialCount}){
    const[count,setCount]=useState(initialCount);
    const[searchItem,setSearchItem]=useState("");
    const[results,setResults]=useState([]);

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
//    const items=['apple','mango','rubber','box','cat','dog','laptop','Javascript','Reactjs'];
//    const filterItems=items.filter(item=>
 //        item.toLowerCase().includes(searchItem.toLowerCase())
 //   );
    
 useEffect(()=>{

    async function fetchData(){
        if(searchItem.trim()===''){
            setResults([]);
            return;
        }
        try{
            const resultData=await fetch('https://openlibraray.org/search.json?=${searchItem}');
            const data=await resultData.json();
            const titles=data.docs.slice(0,10).map((book)=>book.title);
            setResults(titles);
        }catch(error){
            console.error('error occur');
            setResults([]);
        }
    }
    fetchData();
        
 },[searchItem]);


   return(
    <div>
        <h2 style={{padding:"20px"}}>Count:{count}</h2>
        <div style={{padding:"20px"}}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Restart</button>
        <button onClick={switchSign}>Sign Switch</button> 
        </div>
        <div style={{padding:"20px"}}>
        <h2>Search Bar</h2>
        <input type='text' 
        value={searchItem} 
        placeholder="search" 
        style={{padding:"8px",width:"200px",marginBottom:"10px"}}
        onChange={e=>setSearchItem(e.target.value)}
        />
    {searchItem && (<ul>
          {results.length>0?
            (results.map((item,index)=><li key={index}>{item}</li>))
        :(<li>no results found</li>)}
        </ul>)}
        </div>
    </div>
   )
}
export default Dashboard;

