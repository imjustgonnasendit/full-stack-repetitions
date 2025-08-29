import { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setItems(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: 16,
        color: "#e7e7e7",
        background: "#0a0a0a",
        minHeight: "100vh",
      }}
    >
      <h1>Products</h1>
      {loading && <p>Loading…</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0,1fr))",
          gap: 16,
        }}
      >
        {items.map((p) => (
          <div
            key={p.product_id}
            style={{
              border: "1px solid #2a2a2a",
              borderRadius: 12,
              padding: 12,
              background: "#111",
              transition: "transform .16s, box-shadow .16s, border-color .16s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h3 style={{ marginTop: 0 }}>{p.product_name}</h3>
            <p style={{ opacity: 0.8 }}>{p.description}</p>
            <strong>${Number(p.price).toFixed(2)}</strong>
          </div>
        ))}
      </div>
    </main>
  );
}
