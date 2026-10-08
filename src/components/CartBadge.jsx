export function CartBadge({ items }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <span
      style={{
        background: "crimson",
        color: "white",
        borderRadius: "50%",
        padding: "2px 8px",
        fontSize: "14px",
      }}
    >
      {items.length}
    </span>
  );
}
