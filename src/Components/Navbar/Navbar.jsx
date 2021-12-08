import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { HelpOutline, Notifications } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "white",
    // position: "-webkit-sticky",
    // position: "sticky",
    top: 0,
    bottom: 0,
    paddingBottom: "15px",
    zIndex: 5,
  },
  appbar: {
    backgroundColor: "#F7F7F7",
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
}));

export default function Navbar({title}) {
  const [sidebar, setSidebar] = React.useState(false);
  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSidebar(open);
  };

  return (
    <div className={classes.root}>
      <Sidebar toggleDrawer={toggleDrawer} sidebar={sidebar} />
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           {title}
          </Typography>
          <div className="d-flex align-items-center">
            <Notifications />
            <div className="mx-3">
              <HelpOutline />
            </div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className="ms-2 me-4">
              <p className="m-0 fw-bold">Lorem</p>
              <p className="m-0">Finance manager</p>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
