import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Container, makeStyles, Switch, Typography } from "@material-ui/core";

import WeatherCarousel from "./components/carousel/WeatherCarousel";
import UnitChanger from "./components/UnitChanger";
import Welcome from "./components/Welcome";
import { connect } from "react-redux";
import Loader from "./components/Loader";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    marginTop: 30,
  },
  topConainer: {
    marginBottom: 80,
    paddingLeft: 60,
    paddingRight: 60,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 40,
    },
  },
}));

const App = ({ weatherDataLoading, showLoader, hideLoader }) => {
  const classes = useStyles();
  useEffect(() => {
    if (!weatherDataLoading) {
      hideLoader();
    }
  }, [weatherDataLoading]);
  if (weatherDataLoading) return <Loader />;
  return (
    <Container className={classes.rootContainer}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} lg={10}>
          <Grid
            container
            justifyContent={"space-between"}
            className={classes.topConainer}
          >
            <Grid item>
              <Welcome />
            </Grid>
            <Grid item>
              <UnitChanger />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <WeatherCarousel />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  weatherDataLoading: state.weatherDataLoading,
});
export default connect(mapStateToProps)(App);
