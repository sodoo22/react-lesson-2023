import { useState } from "react";

export default function Counter({ isFancy }) {
  const [score, setToo] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }
  if (isFancy) {
    className += " fancy";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
    >
      <h1>{score}</h1>
      <button
        onClick={() => {
          setToo(score + 1);
        }}
      >
        Add one
      </button>
    </div>
  );
}