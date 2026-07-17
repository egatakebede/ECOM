import { getProducts } from "../data/products";

import { Link } from "react-router-dom";

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1> Welcome to EthioShop</h1>
        <p className="home-subtitle">
          Discover Amazing products at Great prices
        </p>
      </div>
      <div className="container">
        <h2 className="pag-title">Our Products Are</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src="{product.image" alt="" className="product-card-image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <div>
                <Link>View Details...</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
