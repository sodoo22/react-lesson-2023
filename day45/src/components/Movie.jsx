import { useLocation, useParams } from "react-router-dom";
import movieData from "../data/movies";

export default function Movie() {
  const { id } = useParams();
  const location = useLocation();
  console.log(location.state);

  const movie = movieData.filter((data) => data.id == id);
  console.log(movie);
  return (
    <div>
      <h2>Movie Detail Page {id}</h2>
      <div>
        {movie &&
          movie.map((m, idx) => {
            return (
              <div key={idx}>
                <p>{m.name}</p>
                <p>{m.id}</p>
                <p>{m.genre}</p>
                <p>{m.ISBN}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
