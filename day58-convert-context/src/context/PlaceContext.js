import { createContext } from "react";
import { useState, useEffect } from "react";

const PlaceContext = createContext(null);

const PlaceContentProvider = ({ children }) => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <PlaceContext.Provider value={[isLarge, setIsLarge, imageSize]}>
      {children}
    </PlaceContext.Provider>
  );
};

export { PlaceContentProvider, PlaceContext };
