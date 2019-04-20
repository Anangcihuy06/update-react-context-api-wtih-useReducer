import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

function SwipeableTemporaryDrawer(props) {
  const { toggleDrawer, store } = props;
  const { state, dispatch } = store;
  const [drawer, setDrawer] = React.useState(false);
  const { classes } = props;
  const right = props;

  const sideList = (
    <div className={classes.list}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  console.log(state.App);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon onClick={() => toggleDrawer(state, dispatch)} />
          </IconButton>
          <Button color="inherit">The News Box office movie</Button>
        </Toolbar>
      </AppBar>
      {!state.App.sideDrawer && (
        <SwipeableDrawer
          anchor="right"
          open={right}
          onClose={() => toggleDrawer(state, dispatch)}
          onOpen={() => toggleDrawer(state, dispatch)}
        >
          <div
            tabIndex={0}
            role="button"
            onKeyDown={() => toggleDrawer(state, dispatch)}
            onClick={() => toggleDrawer(state, dispatch)}
            onKeyDown={() => toggleDrawer(state, dispatch)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      )}
    </div>
  );
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
