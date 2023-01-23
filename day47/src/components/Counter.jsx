import { useState } from "react";

export default function Counter() {
  const [too, setToo] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div
      className={hover ? "counter hover" : "counter"}
      onPointerEnter={() => {
        setHover(!hover);
      }}
      onPointerLeave={() => {
        setHover(!hover);
      }}
    >
      <h1>{too}</h1>
      <button
        onClick={() => {
          setToo(too + 1);
        }}
      >
        Add one
      </button>
    </div>
  );
}
