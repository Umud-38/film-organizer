import React from "react";
import { connect } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

const Movies = ({ movies }) => {
   return (
      <ul className="movies">
         {movies ? (
            movies.map((movie) => (
               <li className="movies__item" key={movie.imdbID}>
                  <MovieItem {...movie} />
               </li>
            ))
         ) : (
            <li className="not-film">
               <ion-icon
                  style={{ marginRight: "5px" }}
                  name="alert-circle-outline"
               ></ion-icon>
               No movie found..
            </li>
         )}
      </ul>
   );
};

const mapStateToProps = (state) => {
   return { movies: state.films };
};

export default connect(mapStateToProps)(Movies);
