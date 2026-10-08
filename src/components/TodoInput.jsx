import { useState } from "preact/hooks";

export function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="ახალი დავალება..."
        value={text}
        onInput={(e) => setText(e.target.value)}
        style={{ flex: 1, padding: "8px 12px" }}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
