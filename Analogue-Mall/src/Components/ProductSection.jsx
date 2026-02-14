import { useSelector } from "react-redux";

export default function ProductSection({ title, type }) {
  const products = useSelector((state) => state.products[type]);

  return (
    <div className="product-section container">
      <div className="section-header">
        <h3>{title}</h3>
        <span>See more</span>
      </div>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-placeholder"></div>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
