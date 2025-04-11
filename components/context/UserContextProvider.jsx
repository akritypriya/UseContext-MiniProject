import React,{useState} from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children })=> {
    const [user,setUser]=useState(null);
    const[cart,setCart]=useState([]);
   return(
        <UserContext.Provider value={{user,setUser,cart,setCart}}>
        {children}
        </UserContext.Provider>
   )
 
   
}

export default UserContextProvider;