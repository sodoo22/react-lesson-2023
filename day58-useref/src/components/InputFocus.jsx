import { useRef } from "react";

export default function InputFocus() {
  const inputUseRef = useRef(null);
  const handleFocus = () => {
    inputUseRef.current.focus();
  };
  const handleBlur = () => {
    inputUseRef.current.blur();
  };
  return (
    <>
      <input type="text" ref={inputUseRef} />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleBlur}>Blur</button>
    </>
  );
}
