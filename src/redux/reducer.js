const initialState = {
   films: [],
   favoriteFilms: [],
   list: "",
   active: false
};

export default function reducer(state = initialState, action) {
   switch (action.type) {
      case "ACTIVE_STATUS": {
         return {
            ...state,
            active: action.status
         };
      }

      case "SET_MOVIES":
         return {
            ...state,
            films: action.data
         };

      case "ADD_FAVORITE_FILM": {
         let newArray = state.favoriteFilms.slice();
         let checkArray = newArray.some(
            (item) => item.id === action.payload.imdbID
         );

         // ---
         if (!state.active)
            checkArray || newArray.push({
               id: action.payload.imdbID,
               title: action.payload.Title,
               year: action.payload.Year,
            });
         return {
            ...state,
            favoriteFilms: newArray
         };
      }

      case "REMOVE_FAVORITE_FILM": {
         let newArray = state.favoriteFilms.slice();
         for (let i = 0; i < newArray.length; ++i) {
            if (newArray[i].id === action.id) {
               newArray.splice(i, 1);
               break;
            }
         }
         return {
            ...state,
            favoriteFilms: newArray
         };
      }

      case "LIST_MOVIES":
         return {
            ...state,
            list: action.data
         };

      default:
         return state;
   }
}
