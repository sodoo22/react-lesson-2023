import React from "react";
import styles from "@/styles/Home.module.css";
import movieStyles from "@/styles/Movie.module.css";
import { Roboto } from 'next/font/google'


function Navbar() {
  return (
    <div>
      <div className={movieStyles.navbar}>
        <div className={movieStyles.leftNavbar}>
          <img
            src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
            alt="logo"
          ></img>
          <input
            className={movieStyles.input}
            placeholder="Search movies, TV, actors, more..."
          />
        </div>
        <div className={movieStyles.rigthNav}>
          <div className={movieStyles.rightTop}>
            <button>What's the Tomatometer®?</button>
            <button>Critics</button>
            <button>Login SignUp</button>
          </div>
          <div className={movieStyles.rightBottom}>
            <button>MOVIES</button>
            <button>TV SHOWS</button>
            <button>MOVIE TRIVIA</button>
            <button>NEWS</button>
            <button>SHOWTIMES</button>
          </div>
        </div>
      </div>
      <div className={movieStyles.NavBottom}>
        <p> TRENDING ON RT </p>
        <button> The Super Mario Bros. Movie First Reviews</button>
      </div>
    </div>
  );
}

export default Navbar;
