import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { activeStatus, listPage, removeFavoriteMovies } from '../../redux/action';
import './Favorites.css';

const Favorites = ({ movies, removeMovie, listPage, activeStatus }) => {
   const [inputValue, setInputValue] = useState('')
   const [active, setActive] = useState(false)
   const [isPending, setIsPending] = useState(false)
   const [id, setId] = useState('')

   const clickBtn = () => {

      setIsPending(true)
      const info = {
         title: inputValue,
         movies: movies.map(movie => movie.id)
      }
      fetch('https://acb-api.algoritmika.org/api/movies/list', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(info)
      })
         .then(res => res.json())
         .then(data => {
            setActive(true)
            setIsPending(false)
            setId(data.id)
         })
   }

   // ---
   active ? activeStatus(true) : activeStatus(false)
   return (
      <div className="favorites">
         <input value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Новый список" className="favorites__name"
            disabled={active && true}
         />
         <ul className="favorites__list">
            {movies.map((item) => (
               <li key={item.id}>
                  <p>{item.title} ({item.year})</p>
                  {active || <button onClick={() => removeMovie(item.id)}>X</button>}
               </li>
            ))}
         </ul>

         {!active && <button
            onClick={clickBtn}
            disabled={movies.length === 0 || !inputValue || isPending}
            type="button" className="favorites__save">
            {!isPending ? "Сохранить список" : "Loading.."}
         </button>}
         {active && listPage(id)}
         {active && <Link to={`/list/${id}`}>
            Enter to Link..
         </Link>}
      </div>
   );
}

const mapStateToProps = state => {
   return { movies: state.favoriteFilms }
}

const mapDispatchToProps = dispatch => {
   return {
      removeMovie: (id) => { dispatch(removeFavoriteMovies(id)) },
      listPage: (id) => { dispatch(listPage(id)) },
      activeStatus: (status => { dispatch(activeStatus(status)) })
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorites)