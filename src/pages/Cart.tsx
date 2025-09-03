import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { increaseQty, decreaseQty, removeItem } from "../store/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = useSelector((s: RootState) => s.cart.items);
  const dispatch = useDispatch();
  const list = Object.values(items);
  const totalItems = list.reduce((sum, it) => sum + it.qty, 0);
  const totalCost = list.reduce((sum, it) => sum + it.qty * it.price, 0);
  return (
    <main className="container" style={{ padding: "40px 0" }}>
      <h2 className="products-heading">Shopping Cart</h2>
      <div className="cart-grid">
        <div>
          <div>
            {list.length === 0 && <p className="muted">Your cart is empty.</p>}
            {list.map((it) => (
              <div key={it.id} className="cart-item">
                {it.thumbnail ? (
                  <img
                    src={it.thumbnail}
                    alt={it.name}
                    className="cart-thumb"
                  />
                ) : (
                  <div className="cart-thumb" />
                )}
                <div style={{ flex: 1 }}>
                  <div className="cart-name">{it.name}</div>
                  <div className="muted">${it.price.toFixed(2)} each</div>
                </div>

                <div className="qty-controls">
                  <button
                    onClick={() => dispatch(decreaseQty(it.id))}
                    className="btn"
                  >
                    -
                  </button>
                  <div>{it.qty}</div>
                  <button
                    onClick={() => dispatch(increaseQty(it.id))}
                    className="btn"
                  >
                    +
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => dispatch(removeItem(it.id))}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="aside">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Total items</span>
            <span className="summary-total">{totalItems}</span>
          </div>
          <div className="summary-row">
            <span>Subtotal</span>
            <span className="summary-total">${totalCost.toFixed(2)}</span>
          </div>
          <div
            style={{
              marginTop: 32,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <button
              onClick={() => alert("Coming Soon")}
              className="btn btn-primary"
            >
              Checkout
            </button>
            <Link to="/products">
              <button className="btn btn-secondary">Continue Shopping</button>
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
