import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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

function ListMovie(props) {
  const { classes } = props;
  const { movies, toggleFavourites, boxStyle, favourites, store } = props;
  const { state, dispatch } = store;
  return movies.map((x, i) => (
    <div key={x.imdbID} className={classes.root}>
      {/* <Grid container spacing={2}>
        <Grid item xs={6}> */}
      <Paper className={classes.paper}>
        <img src={x.Poster} width="100%" />
        Category:{x.Type}
        Title:{x.Title}
        Year:{x.Year}
        <button
          type="button"
          onClick={() => toggleFavourites(state, dispatch, x)}
        >
          {favourites.find(inFav => inFav.imdbID === x.imdbID)
            ? "unFav"
            : "Fav"}
        </button>
      </Paper>
      {/* </Grid>
      </Grid> */}
    </div>
  ));
}

ListMovie.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListMovie);
