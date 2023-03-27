import { createContext, useEffect, useState } from "react";

const RestaurantContext = createContext(null);

const RestaurantContextProvider = ({ children }) => {
  const ALL_RESTAURANT_URL = "http://localhost:8080/restaurant/restaurants";

  const [restaurant, setRestaurant] = useState([]);

  async function fetchRestaurants(url) {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    // console.log(FETCHED_JSON.data);
    setRestaurant(FETCHED_JSON.data);
  }

  useEffect(() => {
    fetchRestaurants(ALL_RESTAURANT_URL);
  }, []);
  return (
    <RestaurantContext.Provider value={restaurant}>
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantContextProvider };
