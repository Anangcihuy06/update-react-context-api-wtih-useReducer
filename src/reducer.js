export function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        movies: action.payload
      };
    case "FAV_MOVIE":
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };
    case "REMOVE_MOVIE":
      return {
        ...state,
        favourites: action.payload
      };
    default:
      return state;
  }
}
