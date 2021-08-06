import {
  SET_CARD_DATA,
  SET_CHART_DATA,
  SET_UNIT,
  SET_WEATHER_DATA,
  SET_WEATHER_DATA_ERROR,
  SET_WEATHER_DATA_LOADING,
} from "./types";

import endPoint from "./endpoint";
import {
  DaysData,
  MakeCardData,
  SimplifyData,
  MakeChartData,
} from "../../logics/transform";

const setWeatherData = (payload) => ({ type: SET_WEATHER_DATA, payload });

const setWeatherDataLoading = (payload) => ({
  type: SET_WEATHER_DATA_LOADING,
  payload,
});

const setWeatherDataError = (payload) => ({
  type: SET_WEATHER_DATA_ERROR,
  payload,
});

const setCardData = (payload) => ({ type: SET_CARD_DATA, payload });
const setChartData = (payload) => ({ type: SET_CHART_DATA, payload });

export const setUnit = (payload) => ({ type: SET_UNIT, payload });
export const fetchWeatherData = () => {
  return async (dispatch) => {
    dispatch(setWeatherDataLoading(true));

    const onSuccess = (data) => {
      dispatch(setWeatherDataLoading(false));
      dispatch(setWeatherDataError(null));

      dispatch(setWeatherData(data));

      const modData = DaysData(SimplifyData(data));

      dispatch(setCardData(MakeCardData(modData)));
      dispatch(setChartData(MakeChartData(modData)));
    };
    const onError = (error) => {
      dispatch(setWeatherDataLoading(false));
      dispatch(setWeatherDataError(error));
    };
    try {
      const data = await fetch(endPoint).then((data) => data.json());
      onSuccess(data);
    } catch (error) {
      onError(error);
    }
  };
};
