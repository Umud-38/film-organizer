import React, { useState } from "react";
import { connect } from "react-redux";
import "./SearchBox.css";
import { setMovies } from "../../redux/action";

const SearchBox = ({ setMovies }) => {
   const [searchLine, setSearchLine] = useState("");

   const searchLineChangeHandler = (e) => {
      setSearchLine(e.target.value);
   };
   const searchBoxSubmitHandler = (e) => {
      e.preventDefault();
   };

   return (
      <div className="search-box">
         <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
            <label className="search-box__form-label">
               Search movie by title:
               <input
                  value={searchLine}
                  type="text"
                  className="search-box__form-input"
                  placeholder="Например, Shawshank Redemption"
                  onChange={searchLineChangeHandler}
               />
            </label>
            <button
               type="submit"
               className="search-box__form-submit"
               disabled={!searchLine}
               onClick={() => setMovies(searchLine)}
            >
               Search
            </button>
         </form>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      setMovies: (name) => {
         dispatch(setMovies(name));
      },
   };
};

export default connect(undefined, mapDispatchToProps)(SearchBox);
