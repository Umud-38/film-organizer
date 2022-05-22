import React from 'react';
import { connect } from 'react-redux';
import './MovieItem.css';
import { favoriteMovies } from "../../redux/action"

const MovieItem = ({ Title, Year, Poster, imdbID, favoriteMovies }) => {
   return (
      <article className="movie-item">
         <img className="movie-item__poster" src={Poster} alt={Title} />
         <div className="movie-item__info">
            <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
            <button onClick={() => favoriteMovies(imdbID, Title, Year)}
               type="button" className="movie-item__add-button">Add to the list</button>
         </div>
      </article>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      favoriteMovies: (id, title, year) => { dispatch(favoriteMovies(id, title, year)) }
   }
}

export default connect(undefined, mapDispatchToProps)(MovieItem);