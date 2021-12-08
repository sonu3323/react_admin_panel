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
    backgroundColor: "red",
  },
  appbar: {
    backgroundColor: "white",
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

export default function NavbarOrder() {
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
      <AppBar elevation={0} position="static" className={classes.appbar}>
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
            <div className="d-flex justify-content-between pt-3 me-5 pe-5">
              <div>
                <h2>Order</h2>
                <h5 className="text-success">Quote</h5>
              </div>

              <div>
                <h5>ABC TRUCKING</h5>
                <h6 className="text-success">Customer</h6>
              </div>
              <div>
                <h5>----</h5>
                <h6 className="text-success">Financed</h6>

              </div>

              <div>
                <h5>-----</h5>
                <h6 className="text-success">Trade In Allowance</h6>
              </div>
            </div>
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
