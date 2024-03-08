import { useEffect, useState } from "react";

export default function RandonColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function RandonColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandoHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandonColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandoRgbColor() {
    const r = RandonColorUtility(256);
    const g = RandonColorUtility(256);
    const b = RandonColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
    console.log(setColor);
  }

  useEffect(()=> {
    if (typeOfColor === "hex") handleCreateRandoHexColor()
    else handleCreateRandoRgbColor()
  },[typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandoHexColor
            : handleCreateRandoRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "30px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
