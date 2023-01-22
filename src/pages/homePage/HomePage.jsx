import React from "react";
import { useState, useEffect } from 'react';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
} from "@material-ui/core";

import axios from "axios";

import Button from "@mui/material/Button";

import useStyles from "./homePageStyle";

import FooterComponent from "../../components/footer/FooterComponent";
import NavBarComponent from "../../components/navBar/NavBarComponent";


const HomePage = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const [response, setResponse] = useState();
  const [post, setPost] = React.useState();





  return (
    <>
      <CssBaseline />
      <NavBarComponent></NavBarComponent>
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
            <div className={classes.buttons}>
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
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {response?.name}
                    </Typography>
                    <Typography>Description</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Favorite
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <FooterComponent></FooterComponent>
    </>
  );
};

export default HomePage;
