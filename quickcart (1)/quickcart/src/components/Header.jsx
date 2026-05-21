import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          Quick<span>Cart</span>
        </div>
        <nav className="header-nav">
          <span className="nav-link">Home</span>
          <span className="nav-link">Products</span>
          <span className="nav-link">About</span>
        </nav>
        <div className="cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span>0 items</span>
        </div>
      </div>
      <div className="promo-bar">
        Free shipping on orders over ₹999 &nbsp;·&nbsp; Use code{" "}
        <strong>QUICKCART10</strong> for 10% off
      </div>
    </header>
  );
}

export default Header;
