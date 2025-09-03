import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">Paradise Nursery</h1>
        <p className="hero-sub">
          We grow and ship healthy houseplants ready to brighten your home.
        </p>
        <Link to="/products">
          <button className="btn btn-primary">Get Started</button>
        </Link>
      </div>
    </main>
  );
}
