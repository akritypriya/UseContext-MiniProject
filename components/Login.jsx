import React, { useState, useContext } from 'react';
import UserContext from './context/UserContext';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
    
    const {theme,setTheme,setUser}=useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username });
        navigate('/profile');
    };

   const handleThemeToggle=()=>{
    setTheme((prevTheme)=>(prevTheme==='light'?'black':'light'))
   };
    return (
    
        <div className={styles.container}>
            <h2 className={styles.title}>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className={styles.input}
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={styles.input}
            />
            <button type="submit" onClick={handleSubmit} className={styles.button}>
                Submit
            </button>
            <div style={{padding:"20px"}}>
            <button onCLick={handleThemeToggle} style={{background:theme==='light'?'white':'black',
            color:theme==='light'?'black':'white'}}> Toggle Theme</button>
            </div>
        </div>
        

    
    );
}

export default Login;

