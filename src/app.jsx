import { useState } from "preact/hooks";
import { ProfileCard } from "./ProfileCard";
import { Badge } from "./components/Badge/Badge";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { TodoApp } from "./components/TodoApp";
import { CartBadge } from "./components/CartBadge";

export function App() {
  const [items, setItems] = useState([]);
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <span>🛒</span>
        <CartBadge items={items} />
        <button onClick={() => setItems([...items, "item"])}>დამატება</button>
        <button onClick={() => setItems([])}>გასუფთავება</button>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <Badge status="success">Success Badge</Badge>
        <Badge status="warning">Warning Badge</Badge>
        <Badge status="error">Error Badge</Badge>
      </div>
      <TodoApp />
    </div>
  );
}

export default App;
