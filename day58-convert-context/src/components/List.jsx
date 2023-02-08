import Place from "./Place";
import { useContext } from "react";
import { PlaceContext } from "../context/PlaceContext";
import { places } from "../data/Data";

export default function List() {
  const items = places.map((place, index) => {
    return <Place key={index} place={place} />;
  });

  return <div>{items}</div>;
}
