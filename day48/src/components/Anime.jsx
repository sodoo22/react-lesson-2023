import { useState } from "react";
import { useEffect } from "react";

export default function Anime() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Anime");
    setCount(count + 1);
  }, []);
  console.log(count);
  function handleClick(e) {
    console.log("button clicked");
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Anime</h1>
      <button
        onClick={(e) => {
          handleClick(e);
          setCount(count + 1);
        }}
      >
        Anime Click
      </button>
    </div>
  );
}
