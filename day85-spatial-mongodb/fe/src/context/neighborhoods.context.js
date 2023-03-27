import { createContext, useEffect, useState } from "react";

const NeighborhoodContext = createContext(null);

const NeighborhoodContextProvider = ({ children }) => {
  const ALL_RESTAURANT_URL = "http://localhost:8080/neighborhood/list";

  const [neigborhood, setNeighborhood] = useState([]);

  async function fetchRestaurants(url) {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    // console.log(FETCHED_JSON.data);
    setNeighborhood(FETCHED_JSON.data);
  }

  useEffect(() => {
    fetchRestaurants(ALL_RESTAURANT_URL);
  }, []);
  return (
    <NeighborhoodContext.Provider value={neigborhood}>
      {children}
    </NeighborhoodContext.Provider>
  );
};

export { NeighborhoodContext, NeighborhoodContextProvider };
