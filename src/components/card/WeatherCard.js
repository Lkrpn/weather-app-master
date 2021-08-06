import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { shouldConvert } from "../../logics/transform";
import CelFah from "./CelFah";

const useStyles = makeStyles((theme) => ({
  weatherPaper: {
    borderRadius: 8,
    width: 280,
    height: 290,
    padding: 10,
    border: "1px solid black",
    display: "inline-block",
  },
  day: {
    fontSize: 17,
    fontWeight: 400,
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
  },
  temperature: {
    lineHeight: 2.5,
    fontSize: 40,
  },
  minMax: {
    fontSize: 17,
    fontWeight: 400,
  },
}));

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const WeatherCard = ({ onClick, card, pos,unit }) => {
  const classes = useStyles();

  const cardDate = new Date(card.dt_txt);
  const handleClick = () => {
    if (onClick) {
      onClick(pos);
    }
  };
  return (
    <Paper className={classes.weatherPaper} onClick={handleClick}>
      <Box p={2}>
        <Typography className={classes.day}>
          {days[cardDate.getDay()]}
        </Typography>
        <Typography className={classes.date}>
          {cardDate.getDate()} {monthNames[cardDate.getMonth()]}{" "}
          {cardDate.getFullYear()}
        </Typography>
        <Typography className={classes.temperature}>
          {shouldConvert(card.temp,unit)} <CelFah cel />
        </Typography>
        <Typography className={classes.minMax}>
          Min {shouldConvert(card.tempMin,unit)} <CelFah cel />
        </Typography>
        <Typography className={classes.minMax}>
          Max {shouldConvert(card.tempMax,unit)} <CelFah cel />
        </Typography>
      </Box>
    </Paper>
  );
};

const mapStateToProps = (state) => ({ unit: state.unit });

export default connect(mapStateToProps)(WeatherCard);
