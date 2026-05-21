import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const { name, description, price, category, rating, badge, image } = product;

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < full; i++) {
      stars.push(
        <span key={`full-${i}`} className="star filled">
          ★
        </span>
      );
    }
    if (half) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-card">
      {badge && <span className="badge">{badge}</span>}

      <div className="card-image-wrap">
        <img src={image} alt={name} className="card-image" loading="lazy" />
      </div>

      <div className="card-body">
        <p className="card-category">{category}</p>
        <h3 className="card-name">{name}</h3>
        <p className="card-description">{description}</p>

        <div className="card-footer">
          <span className="card-price">
            ₹{price.toLocaleString("en-IN")}
          </span>
          <div className="card-rating">
            {renderStars(rating)}
            <span className="rating-value">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
