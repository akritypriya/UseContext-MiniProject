import React, { useContext } from 'react';
import UserContext from './context/UserContext';
import styles from './Profile.module.css';
import Header from '../components/Header';

function Profile() {
  const { user } = useContext(UserContext);
 //condtional rndering
  if (!user) return <div className={styles.loginMessage}>Please Login</div>;

  return (
    <>
    <Header /> 
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome {user.username}</h1>
      <h2 className={styles.subheading}>Handling Context API</h2>
      <p className={styles.description}>
        The Context API in React is a built-in state management solution that allows data to be shared across components without prop drilling.
        <br />
        It is mainly used for global state management like themes, authentication, or user preferences.
      </p>
      <h3 className={styles.listTitle}>How It Works:</h3>
      <ul className={styles.list}>
        <li>Create a Context using <code>React.createContext()</code></li>
        <li>Provide the Context value using a Provider</li>
        <li>Consume the Context value using <code>useContext()</code></li>
      </ul>
    </div>
    </>
  );
}

export default Profile;
