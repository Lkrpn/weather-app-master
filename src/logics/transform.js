//This function will grab all the neccessary data

import { CELCIUS } from "../components/store/types";

//for the app from raw api data
export const SimplifyData = ({ list }) => {
  return list.map((item) => ({
    dt: item.dt,
    dt_txt: item.dt_txt,
    temp: item.main.temp,
    tempMin: item.main.temp_min,
    tempMax: item.main.temp_max,
  }));
};

//This is divide the data by date, here list
//is the data returned by SimplifyData()
export const DaysData = (list) => {
  let dividedDates = [];
  let dayIntervals = [];
  let cursorDate = new Date(list[0]["dt_txt"]).getDate();
  list.forEach((data) => {
    const currentDate = new Date(data["dt_txt"]).getDate();

    if (currentDate !== cursorDate) {
      cursorDate = currentDate;
      dividedDates.push(dayIntervals);
      dayIntervals = [];
    }
    dayIntervals.push(data);
  });
  dividedDates.push(dayIntervals);
  return dividedDates;
};

//Makes card data from the returned data of DaysData()
export const MakeCardData = (daysData) =>
  daysData.map((day) => {
    let cardData;
    for (let hour of day) {
      cardData = hour;
      if (new Date(hour["dt_txt"]).getHours() >= 12) {
        break;
      }
    }
    return cardData;
  });

//Gets all the dates
export const GetAllDates = (daysData) => {
  let allDates = [];
  for (let day of daysData) {
    allDates.push(new Date(day[0]["dt_txt"]).getDate());
  }
  return allDates;
};

//Gets all the data for the bar chart from the returned data of DaysData() and dateNum
export const MakeBarChartData = (daysData, dateNum) => {
  let dayData;
  for (let day of daysData) {
    if (new Date(day[0]["dt_txt"]).getDate() === dateNum) {
      dayData = day;
      break;
    }
  }
  return dayData.map((hourly) => ({
    dt_txt: hourly.dt_txt,
    temp: hourly.temp,
  }));
};

export const MakeChartData = (daysData) => {
  return GetAllDates(daysData).map((day) => {
    return MakeBarChartData(daysData, day);
  });
};

export const shouldConvert = (temperature,unit) => {
  if(unit===CELCIUS){
    return temperature
  }
  const temp = (temperature * (9 / 5) + 32)
  return temp.toFixed(2)
}