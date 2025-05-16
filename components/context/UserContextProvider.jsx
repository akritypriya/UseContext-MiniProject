import React,{useState} from 'react';
import UserContext from './UserContext';
import useLocalStorage from '../useLocalStorage';

const UserContextProvider = ({ children })=> {
    const [user,setUser]=useLocalStorage('name',{ username: ''});
    const[cart,setCart]=useState([]);
    const[theme,setTheme]=useState('light');
   return(
        <UserContext.Provider value={{user,setUser,cart,setCart,theme,setTheme}}>
        {children}
        </UserContext.Provider>
   )
 
   
}

export default UserContextProvider;