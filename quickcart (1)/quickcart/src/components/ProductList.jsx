import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

function ProductList({ products }) {
  return (
    <section className="product-list-section">
      <div className="section-header">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-count">{products.length} items</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
