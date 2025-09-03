import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";
import type { RootState } from "../store";

type Plant = {
  id: string;
  name: string;
  price: number;
  category: string;
  thumbnail?: string;
};

const PLANTS: Plant[] = [
  {
    id: "p1",
    name: "Fiddle Leaf Fig",
    price: 45,
    category: "Large Plants",
    thumbnail: "images/fiddle leaf fig.png",
  },
  {
    id: "p2",
    name: "Snake Plant",
    price: 30,
    category: "Low Light",
    thumbnail: "images/snake.png",
  },
  {
    id: "p3",
    name: "Monstera Deliciosa",
    price: 50,
    category: "Large Plants",
    thumbnail: "images/monstera deliciosa.png",
  },
  {
    id: "p4",
    name: "ZZ Plant",
    price: 28,
    category: "Low Light",
    thumbnail:
      "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "p5",
    name: "Golden Pothos",
    price: 18,
    category: "Trailing Vines",
    thumbnail: "images/golden pothos.png",
  },
  {
    id: "p6",
    name: "String of Hearts",
    price: 22,
    category: "Trailing Vines",
    thumbnail: "images/string of hearts.png",
  },
];

export default function Products() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const grouped = PLANTS.reduce<Record<string, Plant[]>>((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

  function handleAdd(p: Plant) {
    dispatch(
      addItem({
        id: p.id,
        name: p.name,
        price: p.price,
        thumbnail: p.thumbnail,
      })
    );
  }

  return (
    <main className="container" style={{ padding: "40px 0" }}>
      <h2 className="products-heading">Products</h2>
      {Object.entries(grouped).map(([category, plants]) => (
        <section key={category} style={{ marginBottom: 40 }}>
          <h3 className="category-heading">{category}</h3>
          <div className="products-grid">
            {plants.map((p) => (
              <div key={p.id} className="product-card">
                <img src={p.thumbnail} alt={p.name} className="product-img" />
                <div className="product-name">{p.name}</div>
                <div className="product-price">${p.price.toFixed(2)}</div>
                <div>
                  <button
                    onClick={() => handleAdd(p)}
                    disabled={!!cartItems[p.id]}
                    className="btn btn-primary"
                  >
                    {cartItems[p.id] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
