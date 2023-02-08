import { places } from "../data/Data";
import Place from "./Place";

export default function List({ imageSize }) {
  return places.map((place, index) => (
    <Place key={index} place={place} imageSize={imageSize} />
  ));
}
