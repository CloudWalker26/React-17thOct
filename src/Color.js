import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function Color() {
  const [color, setColor] = useState("red");

  const [colors, setColors] = useState(["crimson", "orange", "skyblue"]);

  const style = {
    backgroundColor: color,
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  };
  return (
    <div>
      <input
        value={color}
        style={style}
        onChange={(e) => {
          setColor(e.target.value);
        }}
        placeholder="Enter a color"
      />
      <button onClick={() => setColors([...colors, color])}>Add color</button>
      {colors.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
