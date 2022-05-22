export const activeStatus = (status) => {
   return {
      type: "ACTIVE_STATUS", status
   };
};

export const setMovies = (name) => {
   return (dispatch) => {
      const getData = async () => {
         const response = await fetch(
            `http://www.omdbapi.com/?s=${name}&apikey=91b17070`
         );
         const data = response.json();
         return data;
      };
      getData().then((data) =>
         dispatch({ type: "SET_MOVIES", data: data.Search })
      );
   };
};

export const favoriteMovies = (imdbID, Title, Year) => {
   return {
      type: "ADD_FAVORITE_FILM",
      payload: {
         imdbID,
         Title,
         Year,
      },
   };
};

export const removeFavoriteMovies = (id) => {
   return {
      type: "REMOVE_FAVORITE_FILM", id
   };
};

export const listPage = (id) => {
   return (dispatch) => {
      const getData = async () => {
         const response = await fetch(
            `https://acb-api.algoritmika.org/api/movies/list/${id}`
         );
         const data = response.json();
         return data;
      };
      getData().then((data) =>
         dispatch({ type: "LIST_MOVIES", data })
      );
   };
};
