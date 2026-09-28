import { ProfileCard } from "./ProfileCard";
import { Badge } from "./components/Badge/Badge";
import { ProductCard } from "./components/ProductCard/ProductCard";

export function App() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <Badge status="success">Success Badge</Badge>
        <Badge status="warning">Warning Badge</Badge>
        <Badge status="error">Error Badge</Badge>
      </div>

      <ProductCard
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        title="Nike Air Max"
        price={129.99}
      />
    </div>
  );
}

export default App;
