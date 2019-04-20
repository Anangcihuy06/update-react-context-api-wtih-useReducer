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
    case "SIDEDRAWER_OPEN":
      return {
        ...state,
        App: { sideDrawer: action.payload }
      };
    default:
      return state;
  }
}
