import React from "react";

export default function ListMovie(props) {
  const { movies, toggleFavourites, boxStyle, favourites, store } = props;
  const { state, dispatch } = store;
  return movies.map((x, i) => (
    <div key={x.imdbID} style={boxStyle}>
      <img src={x.Poster} />
      <section>
        <div>
          Category:{x.Type}
          Title:{x.Title}
          Year:{x.Year}
        </div>
        <button
          type="button"
          onClick={() => toggleFavourites(state, dispatch, x)}
        >
          {favourites.find(inFav => inFav.imdbID === x.imdbID)
            ? "unFav"
            : "Fav"}
        </button>
      </section>
    </div>
  ));
}
