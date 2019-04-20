import React from "react";

export const fetchData = async dispatch => {
  const URL = "https://www.omdbapi.com/?apikey=4835b713&s=Batman";
  const data = await fetch(URL);
  const movieJson = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: movieJson.Search
  });
};
export const toggleFavourites = (state, dispatch, movies) => {
  let moveInfav = state.favourites.includes(movies);
  if (moveInfav) {
    const favMovie = state.favourites.filter(
      fav => fav.imdbID !== movies.imdbID
    );
    dispatch({
      type: "REMOVE_MOVIE",
      payload: favMovie
    });
  } else if (!moveInfav) {
    dispatch({
      type: "FAV_MOVIE",
      payload: movies
    });
  }
};

export const toggleDrawer = (state, dispatch) => {
  let drawerOpen = state.App.sideDrawer.includes(true);
  if (drawerOpen) {
    dispatch({
      type: "SIDEDRAWER_OPEN",
      payload: "false"
    });
  } else if (!drawerOpen) {
    dispatch({
      type: "SIDEDRAWER_OPEN",
      payload: "true"
    });
  }
};
