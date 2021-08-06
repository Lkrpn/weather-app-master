import {
  SET_WEATHER_DATA,
  SET_WEATHER_DATA_LOADING,
  SET_WEATHER_DATA_ERROR,
  SET_CARD_DATA,
  SET_CHART_DATA,
  SET_ALL_DAYS,
  CELCIUS,
  SET_UNIT,
} from "./types";

import { fetchWeatherData } from "./actions";

const initialState = {
  weatherData: null,
  weatherDataLoading: true,
  weatherDataError: false,
  cardData: null,
  chartData: null,
  unit: CELCIUS,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return { ...state, weatherData: action.payload };
    case SET_WEATHER_DATA_LOADING:
      return { ...state, weatherDataLoading: action.payload };
    case SET_WEATHER_DATA_ERROR:
      return { ...state, weatherDataError: action.payload };
    case SET_CARD_DATA:
      return { ...state, cardData: action.payload };
    case SET_CHART_DATA:
      return { ...state, chartData: action.payload };

    case SET_UNIT:
      return { ...state, unit: action.payload };
    default:
      return state;
  }
};

fetchWeatherData();
export default reducer;
