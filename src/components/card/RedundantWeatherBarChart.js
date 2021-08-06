import { Paper } from "@material-ui/core";
import React from "react";

const WeatherBarChart = ({ onClick, pos }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(pos);
    }
  };
  return (
    <Paper
      style={{
        width: "660px",
        border: "1px solid black",
        borderRadius: "8px",
        height: "200px",
      }}
    >
      Bar chart here!
      <button onClick={handleClick}>x</button>
    </Paper>
  );
};

export default WeatherBarChart;
