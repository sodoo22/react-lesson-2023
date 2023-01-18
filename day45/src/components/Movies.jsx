import { useState } from "react";
import { Link } from "react-router-dom";
import movieData from "../data/movies";

export default function Movies() {
  const [movies, setMovies] = useState(movieData);
  console.log(movies);

  return (
    <div>
      <h1>Movies</h1>
      {movieData.map((data, index) => {
        return (
          <Link key={index} state={data} to={`/movies/${data.id}`}>
            <div>{data.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
