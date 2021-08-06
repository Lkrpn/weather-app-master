import { IconButton, Paper, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ClearIcon from "@material-ui/icons/Clear";
import sampleData from "../../logics/sample_data";
import {
  SimplifyData,
  DaysData,
  GetAllDates,
  MakeBarChartData,
} from "../../logics/transform";
import makeChartOptions from "./makeChartOptions";
import { connect } from "react-redux";

const data = MakeBarChartData(
  DaysData(SimplifyData(sampleData)),
  GetAllDates(DaysData(SimplifyData(sampleData)))[2]
);

const options = makeChartOptions(data);

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "300px",
    borderRadius: "8px",
    padding: "10px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    right: 2,
    top: 0,
    zIndex: 1000,
  },
}));
const WeatherChart = ({ onClick, pos, data, unit }) => {
  
  const classes = useStyles();
  const handleClick = () => {
    if (onClick) {
      onClick(pos);
    }
  };
  return (
    <Paper className={classes.root}>
      <IconButton className={classes.closeButton} onClick={handleClick}>
        <ClearIcon />
      </IconButton>
      {data !== undefined && (
        <HighchartsReact
          highcharts={Highcharts}
          options={makeChartOptions(data, unit)}
        />
      )}
    </Paper>
  );
};

const mapStateToProps = (state) => ({ unit: state.unit });

export default connect(mapStateToProps)(WeatherChart);
