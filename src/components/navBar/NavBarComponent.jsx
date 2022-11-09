import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { TwoWheelerRounded } from "@material-ui/icons";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import useStyles from "./navBarStyle";

const NavBarComponent = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <TwoWheelerRounded className={classes.icon} />
          <Typography varient="h6">Motorcyclepedia</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBarComponent;
