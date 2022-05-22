import React from 'react';
import { connect } from 'react-redux';
import './ListPage.css';

const ListPage = ({ listPage, movies }) => {
   return (
      <div className="list-page">
         <h1 className="list-page__title">{listPage.title}</h1>
         <ul>
            {/* Loading hissesini duzelt */}
            {!listPage.movies ? null : listPage.movies.map((item) => {
               return (
                  <li key={item}>
                     <a target="_blank" rel="noopener noreferrer"
                        href={`https://www.imdb.com/title/${item}/`}
                     >
                        {movies.map(movie => (
                           movie.id === item ? `${movie.title} (${movie.year})` : false
                        ))}
                     </a>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

const mapStateToProps = state => {
   return {
      listPage: state.list,
      movies: state.favoriteFilms
   }
}

export default connect(mapStateToProps)(ListPage);