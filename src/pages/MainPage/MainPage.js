import React, { useState } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

const MainPage = () => {
   const [show, setShow] = useState(false)
   return (
      <div className="main-page">
         <header>
            <Header />
            <button className="favorite-show-btn" onClick={() => { setShow(!show) }}>
               {!show ? "Show your favorite movies" : "Hide your favorite movies"}
            </button>
         </header>
         <main className="main-page__content">
            <section className="main-page__main-section">
               <div className="main-page__search-box">
                  <SearchBox />
               </div>
               <div className="main-page__movies">
                  <Movies />
               </div>
            </section>
            <aside className={"main-page__favorites" + (!show ? " main-page__favorites-hide" : '')}>
               <Favorites />
            </aside>
         </main>
      </div>
   );
}

export default MainPage;