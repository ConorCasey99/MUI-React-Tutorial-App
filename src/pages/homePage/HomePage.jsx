import * as React from "react";
import  {useState, useEffect} from "react";

import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  TextField,
  InputLabel,
  MenuItem
} from "@material-ui/core";

import Box from "@mui/material/Box";

import axios from "axios";

import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useStyles from "./homePageStyle";
import FormControl from '@mui/material/FormControl';
import FooterComponent from "../../components/footer/FooterComponent";
import NavBarComponent from "../../components/navBar/NavBarComponent";
import { Refresh } from "@material-ui/icons";


const HomePage = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const [response, setResponse] = useState([]);
  const [post, setPost] = React.useState();
  const [manufacturer, setManufacturer] = React.useState("");

 	const fetchQuotes = async () => {
    try {
      const res = await axios.get(
        `https://api.api-ninjas.com/v1/motorcycles?make=${manufacturer}`,
        {
          headers: { "X-Api-Key": "GwWPrm4fdIwHjeghonki+Q==Nx6g1uPzf6AdtWbS" },
          params: { category: "all", count: "1" },
        }
      );
      setResponse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setManufacturer(event.target.value);
    fetchQuotes()
  };


  	useEffect(() => {
      // Trigger the API Call
    fetchQuotes()
    }, []);


console.log("this is", response)


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
              Motorcycle's
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
                    Manufacturer
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Categories
                  </Button>
                </Grid>
              </Grid>
            </div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Manufacturer</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={manufacturer}
                label="manufacturer"
                onChange={handleChange}
              >
                <MenuItem value={"honda"}>Honda</MenuItem>
                <MenuItem value={"yamaha"}>Yamaha</MenuItem>
                <MenuItem value={"suzuki"}>Suzuki</MenuItem>
                <MenuItem value={"ducati"}>Ducati</MenuItem>
              </Select>
            </FormControl>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {response.map((motorcycle) => (
              <Grid item key={motorcycle} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {motorcycle?.model}
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
