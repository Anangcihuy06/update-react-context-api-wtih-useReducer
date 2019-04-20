import React, { useEffect } from "react";
import { Store } from "./Store";
import { fetchData, toggleFavourites } from "./action";
const ListMovie = React.lazy(() => import("./ListMovie"));

export default function App() {
  const { state, dispatch } = React.useContext(Store);
  useEffect(() => {
    fetchData(dispatch);
  }, []);
  const StyleLayout = {
    display: "flex",
    flexWrap: "wrap",
    background: "#fafafa"
  };
  const boxStyle = {
    padding: ".5rem",
    overflow: "hidden"
  };
  const loading = {
    fontSize: "#000",
    width: "100%",
    background: "#fff",
    padding: "0.5rem"
  };
  const props = {
    movies: state.movies,
    store: { state, dispatch },
    favourites: state.favourites,
    toggleFavourites,
    boxStyle
  };
  return (
    <React.Fragment>
      <header className="header">
        <h1>Hello Coder</h1>
        <p>Start Movies to see on this weeks!</p>
      </header>
      <React.Suspense
        fallback={<div style={loading}>Loading please wait ...</div>}
      >
        <section style={StyleLayout}>
          <ListMovie {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
