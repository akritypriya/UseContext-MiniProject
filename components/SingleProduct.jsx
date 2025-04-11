import React,{useContext} from 'react'
import styles from './SingleProduct.module.css';
import UserContext from './context/UserContext';

const SingleProduct = ({ prod }) => {
  const { cart,setCart } = useContext(UserContext);
  const isInCart = cart.some((item) => item.id === prod.id);
  
  return (
    <div className={styles.products}>
      <img src={prod.image} alt={prod.name} />
      <div className={styles.productDesc}>
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>Rs.{prod.price}</span>
      </div>

      {isInCart ? (
        <button
          className={styles.add}
          onClick={() =>
            setCart(cart.filter((c) => c.id !== prod.id))
          }
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className={styles.add}
          onClick={() => setCart([...cart, prod])}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
