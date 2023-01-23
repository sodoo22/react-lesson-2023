import { useEffect } from "react";
import { useState } from "react";

export default function Button() {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      console.log("it is playing");
    } else {
      console.log("it is not playing");
    }
  }, [isPlaying]);
  function handleClick() {
    console.log("You clicked me");
    setIsPlaying(!isPlaying);
  }

  return <button onClick={handleClick}>Click me</button>;
}
