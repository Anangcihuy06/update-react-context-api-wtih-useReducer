import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { Store } from "./Store";
import { fetchData, toggleFavourites, toggleDrawer } from "./action";
import SideDrawer from "./sideDrawer";
const ListMovie = React.lazy(() => import("./ListMovie"));

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function App(props) {
  const { classes } = props;
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
  props = {
    movies: state.movies,
    store: { state, dispatch },
    favourites: state.favourites,
    toggleFavourites,
    boxStyle,
    toggleDrawer
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <SideDrawer {...props} />

              <React.Suspense
                fallback={<div style={loading}>Loading please wait ...</div>}
              >
                <section style={{ padding: "0.5rem" }}>
                  my favourites movies {state.favourites.length}
                </section>
                <ListMovie {...props} />
              </React.Suspense>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
