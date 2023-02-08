import { getImageUrl } from "../utils";
import { useContext } from "react";
import { PlaceContext } from "../context/PlaceContext";

export default function PlaceImage({ place }) {
  const [isLarge, setIsLarge, imageSize] = useContext(PlaceContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
