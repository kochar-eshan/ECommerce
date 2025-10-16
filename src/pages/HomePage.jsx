import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { ProductContainer } from '../components/ProductContainer.jsx';
import './HomePage.css';

export function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products/', {
          method: 'GET',
        });
        const data = await response.json();
        console.log(data);
        setProducts(data.data); // assuming API returns { data: [...] }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header />
      <div className='home-page'>
        <div className='products-grid'>
          {products.map((product) => (
            <ProductContainer key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
