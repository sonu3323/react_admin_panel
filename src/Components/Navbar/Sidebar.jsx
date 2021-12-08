import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import {
  AirportShuttle,
  Announcement,
  AttachMoney,
  BorderOuter,
  Dashboard,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Sidebar({ toggleDrawer, sidebar }) {
  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="text-center p-3">
        <h2>Logo</h2>
      </div>
      <List>
        <Link to="/" className="text-dark text-decoration-none">
          <ListItem button>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to="/order" className="text-dark text-decoration-none">
          <ListItem button>
            <ListItemIcon>
              <AirportShuttle />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        </Link>
        <Link to="/sale" className="text-dark text-decoration-none">
          <ListItem button>
            <ListItemIcon>
              <AttachMoney />
            </ListItemIcon>
            <ListItemText primary="Sales" />
          </ListItem>
        </Link>
        <Link to="/financerequests" className="text-dark text-decoration-none">
          <ListItem button>
            <ListItemIcon>
              <Announcement />
            </ListItemIcon>
            <ListItemText primary="Finance Requests" />
          </ListItem>
        </Link>
        {/* <Link to="/deposits" className="text-dark text-decoration-none">
          <ListItem button>
            <ListItemIcon>
              <BorderOuter />
            </ListItemIcon>
            <ListItemText primary="Deposits" />
          </ListItem>
        </Link> */}
        <Link to="/config" className="text-dark text-decoration-none">
          <ListItem button>
            <ListItemIcon>
              <BorderOuter />
            </ListItemIcon>
            <ListItemText primary="Config" />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"left"}
          open={sidebar}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

