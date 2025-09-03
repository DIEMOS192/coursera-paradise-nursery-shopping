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
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="logo-icon">
            <circle cx="16" cy="16" r="16" fill="currentColor"/>
            <path d="M8 24h16v2H8z" fill="#ffffff" opacity="0.9"/>
            <path d="M16 6c-2 0-4 1-5 3s0 4 1 5c1-1 2-2 4-2s3 1 4 2c1-1 2-3 1-5s-3-3-5-3z" fill="#ffffff"/>
            <path d="M16 14c-1 0-2 1-2 2v6c0 1 1 2 2 2s2-1 2-2v-6c0-1-1-2-2-2z" fill="#15803d"/>
            <ellipse cx="16" cy="10" rx="3" ry="2" fill="#ffffff" opacity="0.8"/>
          </svg>
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
