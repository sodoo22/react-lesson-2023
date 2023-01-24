import { useState } from "react";
import Counter from "./Counter";

export default function Fancy() {
  const [isFancy, setInFancy] = useState(false);
  return (
    <div className="App">
      <h1>Day-49</h1>
      <div className="con">
        <Counter isFancy={isFancy} />
        <label htmlFor="">
          <input
            type="checkbox"
            checked={isFancy}
            onChange={(e) => {
              setInFancy(e.target.checked);
            }}
          />
          Use fancy styling
        </label>
      </div>
    </div>
  );
}
