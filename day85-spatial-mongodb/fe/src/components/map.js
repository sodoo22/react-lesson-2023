import { useContext } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  CircleMarker,
  Polygon,
  Popup,
} from "react-leaflet";
import { NeighborhoodContext } from "../context/neighborhoods.context";
import { RestaurantContext } from "../context/restaurants.context";

export default function Map() {
  const restaurants = useContext(RestaurantContext);
  const neighborhoods = useContext(NeighborhoodContext);
  const purpleOptions = { color: "purple" };
  const redOptions = { color: "red" };
  // console.log(restaurants.reverse());
  console.log(neighborhoods);
  return (
    <div>
      <h1>My Map</h1>
      <MapContainer
        center={[40.70072523469547, -73.94193078816193]}
        zoom={13}
        scrollWheelZoom={false}
      >
        {neighborhoods &&
          neighborhoods.map((pol) => {
            const polygon = pol.geometry.coordinates[0];

            const rePolygon = polygon.map((subArr) => {
              const len = subArr.length;
              const reversedSubArr = [];

              for (let i = len - 1; i >= 0; i--) {
                reversedSubArr.push([subArr[i][1], subArr[i][0]]);
              }
              return reversedSubArr;
            });
            console.log(rePolygon);

            return (
              <Polygon
                pathOptions={purpleOptions}
                positions={rePolygon}
                // position={[point.address.coord[1], point.address.coord[0]]}
              />
            );
            // <CircleMarker
            //   center={[pol.geometry.coordinates]}
            //   pathOptions={redOptions}
            //   radius={20}
            // >
            //   <Popup>Popup in CircleMarker</Popup>
            // </CircleMarker>;
          })}

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      {/* <MapContainer
        center={[40.70072523469547, -73.94193078816193]}
        zoom={13}
        scrollWheelZoom={false}
      >
        {neighborhoods &&
          neighborhoods.map((pol) => {
            console.log(pol.geometry.coordinates);
            // <Polygon
            //   pathOptions={purpleOptions}
            //   positions={pol.geometry.coordinates}
            // />;
            <CircleMarker
              center={[pol.geometry.coordinates]}
              pathOptions={redOptions}
              radius={20}
            >
              <Popup>Popup in CircleMarker</Popup>
            </CircleMarker>;
          })}

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {restaurants &&
          restaurants.map((point) => {
            // console.log(point.address.coord);
            return (
              <Marker
                position={[point.address.coord[1], point.address.coord[0]]}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            );
          })}
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
    </div>
  );
}
