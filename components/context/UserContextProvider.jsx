import React,{useState} from 'react';
import UserContext from './UserContext';
import useLocalStorage from '../useLocalStorage';

const UserContextProvider = ({ children })=> {
    const [user,setUser]=useLocalStorage('name',{ username: ''});
    const[cart,setCart]=useState([]);
   return(
        <UserContext.Provider value={{user,setUser,cart,setCart}}>
        {children}
        </UserContext.Provider>
   )
 
   
}

export default UserContextProvider;