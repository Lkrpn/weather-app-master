import React, { useEffect } from "react";
import { fetchWeatherData } from "./store/actions";
import { connect } from "react-redux";

const FetchData = ({ fetchWeatherData }) => {
  useEffect(() => {
    fetchWeatherData();
  }, []);

  return <span></span>;
};

const mapDispatchToProps = (dispatch) => ({
  fetchWeatherData: () => dispatch(fetchWeatherData()),
});

export default connect(null, mapDispatchToProps)(FetchData);
