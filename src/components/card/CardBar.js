//This is deprecated, works fine but buggy

import React from "react";
import WeatherBarChart from "./WeatherBarChart";
import WeatherCard from "./WeatherCard";

const CardBar = ({showCard,onClick}) => {
 
  if (showCard) {
    return <WeatherCard onClick={onClick} />;
  }
  return <WeatherBarChart onClose={onClick} />;
};

export default CardBar;
