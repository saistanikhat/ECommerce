import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="product-grid">
          {products.map((prod, index) => (
            <div key={index} className="card">
              <img className="img" src={prod.image} alt={prod.image} />
              <div className="product-details">
                <div className="product-title">{prod.title}</div>
                <div className="product-price">${prod.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
