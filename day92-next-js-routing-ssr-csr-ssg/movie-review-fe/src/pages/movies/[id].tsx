import React from "react";
import { useRouter } from "next/router";

// export async function getServerSideProps(req: any) {
//   console.log(req.params);
//   const { user } = req.params;

//   return {
//     props: {
//       user,
//     },
//   };
// }

export default function movieDetail(props: any) {
  const [movies, setMovies] = React.useState([]);

  async function getMovies() {
    const FETCHED_DATA = await fetch("http://localhost:8080/movies/list");
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setMovies(FETCHED_JSON);
  }

  // const movieById = movies.find((movie) => movie._id === props.query._id);

  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>Hello</h1>
      <h2 className="text-black text-4xl">Movie ID is {query._id}</h2>
    </div>
  );
}
