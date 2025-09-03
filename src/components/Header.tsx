import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Header() {
  const items = useSelector((s: RootState) => s.cart.items);
  const totalCount = Object.values(items).reduce((sum, it) => sum + it.qty, 0);

  return (
    <header className="site-header">
      <div className="container inner">
        <Link to="/" className="logo">
          Paradise Nursery
        </Link>

        <nav className="nav">
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>

          <Link to="/cart" aria-label="cart" className="cart-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h15l-1.5 9h-13z"></path>
              <circle cx="9" cy="20" r="1"></circle>
              <circle cx="19" cy="20" r="1"></circle>
            </svg>
            <span className="cart-count">{totalCount}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
