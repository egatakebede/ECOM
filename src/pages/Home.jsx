import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";
import { Link } from "react-router-dom";

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1>Welcome to EthioShop</h1>
        <p className="home-subtitle">
          Discover Amazing products at Great prices
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Our Products Are</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
