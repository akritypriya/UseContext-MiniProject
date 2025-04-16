import React,{useState,useEffect} from 'react';

function getSavedValue(key,initialValue){
    const savedValue=JSON.parse(localStorage.getItem(key));
    if(savedValue) return savedValue;
    
    if(initialValue instanceof Function) return initialValue()
    return initialValue;

}


function useLocalStorage(key,initialValue) {
    const [value,setValue]=useState(()=>{
        return getSavedValue(key,initialValue)
    });

    //we are using function in useState because we want the value 
    //in the first run of execution of function ,not evrytime rendered

useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
},[value]);

  return [value,setValue]
}

export default useLocalStorage

