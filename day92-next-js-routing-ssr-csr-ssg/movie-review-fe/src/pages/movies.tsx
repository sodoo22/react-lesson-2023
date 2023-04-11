import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import movieStyles from "@/styles/Movie.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Link from "next/link";

// interface IMovies {
//   plot: string;
//   Genres: IGenres;
//   runtime: number;
//   cast: {
//     type: [string];
//   };
//   num_mflix_comments: number;
//   poster: string;
//   title: string;
//   fullplot: string;
//   languages: {
//     type: [string];
//   };
//   released: number;
//   directors: IDirectors;
//   writers: IWriters;
//   awards: IAwards;
//   lastUpdated: string;
//   year: number;
//   imdb: IImdb;
//   countries: {
//     type: [string];
//   };
//   type: string;
//   tomatoes: ITomatoes;
// }

// interface IDirectors {
//   directors: {
//     type: [string];
//   };
// }

// interface IGenres {
//   genres: {
//     type: [string];
//   };
// }
// interface IWriters {
//   genres: {
//     type: [string];
//   };
// }

// interface IAwards {
//   wins: number;
//   nominations: number;
//   text: string;
// }

// interface IImdb {
//   rating: number;
//   votes: number;
//   id: null;
// }

// interface ITomatoes {
//   viewer: IViewer;
//   lastUpdated: number;
// }
// interface IViewer {
//   rating: number;
//   numReviews: number;
//   meter: number;
// }

interface IMovies {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  writers: string[];
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: string[];
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    lastUpdated: Date;
  };
}

function MoviesData(): JSX.Element {
  const [movies, setMovies] = useState<IMovies[]>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async (): Promise<void> => {
    const FETCHED_DATA = await fetch("http://localhost:8080/movies/list");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setMovies(FETCHED_JSON);
    console.log(FETCHED_JSON);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value);
    fetch(`http://localhost:8080/movies/list?page=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  };

  return (
    <>
      <div className="bg-white text-black gap-5 grid sm:grid-cols-2  lg:grid-cols-6 justify-between container p-3">
        {movies.map((movie, index) => {
          console.log(movie.poster === undefined);
          return (
            <div key={index}>
              <img
                className="object-cover hover:object-none sm:h-100 sm:w-50 lg:h-60 lg:w-48 rounded-md"
                src={!movie.poster ? "/sample.jpg" : movie.poster}
              />

              <Link href={{ pathname: "/movies/id", query: movie._id }}>
                <h5>{movie.title}</h5>
              </Link>
            </div>
          );
        })}
        {/* {movies.map((e, index) => (
          <p key={index}> {e.cast} </p>
        ))} */}
      </div>
      <Stack spacing={2}>
        <Pagination
          count={10}
          size="large"
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </Stack>
      <br />
      <br />
    </>
  );
}

export default MoviesData;
