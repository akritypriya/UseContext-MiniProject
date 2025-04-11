import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import styles from './HomePage.module.css';
import Header from '../components/Header';
import SingleProduct from './SingleProduct';


faker.seed(100);
export default function HomePage() {
  const productsArray = [...Array(50)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));
  
  //const { cart,setCart } = useContext(UserContext);
  const [products] = useState(productsArray);

  
  //console.log(cart);
  return (
    <>
      <Header />
      <div className={styles.productContainer}>
        {products.map((prod) => (

          <SingleProduct  key={prod.id} prod={prod}/>
        ))}
      </div>
    </>
  );
}
