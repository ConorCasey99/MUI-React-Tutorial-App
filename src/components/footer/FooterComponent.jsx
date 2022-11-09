import React from "react";
import {
  Typography,
  CssBaseline,
} from "@material-ui/core";

import useStyles from "./footerComponentStyle";

const FooterComponent = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Conor Casey
        </Typography>
      </footer>
    </>
  );
};

export default FooterComponent;
