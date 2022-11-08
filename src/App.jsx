import React from 'react';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'
import {TwoWheelerRounded} from "@material-ui/icons";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles ((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}));

const App = () => {
    const classes = useStyles();

    return (
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <TwoWheelerRounded />
            <Typography varient="h6">Motorcyclepedia</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPriamry"
                gutterBottom
              >
                {" "}
                Current Entries
              </Typography>
              <Typography
                varient="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                {" "}
                Currently available articles.
              </Typography>
              <div>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Categories
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </main>
      </>
    );
}

export default App;