import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import styles from './cart.module.css';
import UserContext from './context/UserContext';
import SingleProduct from './SingleProduct'; 

function Cart() {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(UserContext);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <>
      <Header />
      <div>
        <span style={{ fontSize: 30 }}>My Cart</span>
        <br />
        <span style={{ fontSize: 30 }}>Total: Rs.{total.toFixed(2)}</span>
        <div className={styles.productContainer}>
          {
            cart.map((prod) => (
              <SingleProduct key={prod.id} prod={prod} />
            )) 
          }
        </div>
      </div>
    </>
  );
}

export default Cart;
