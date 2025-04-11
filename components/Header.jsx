import React, {useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import UserContext from './context/UserContext';

function Header() {
  const { cart } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link to="/home" className={styles.link}>Home Page</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/cart" className={styles.link}>Cart ({cart.length})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
