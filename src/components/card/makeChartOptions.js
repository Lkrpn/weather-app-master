import { shouldConvert } from "../../logics/transform";

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
const makeChartOptions = (dayData, unit) => {
  const firstHour = dayData[0];
  const dtx = new Date(firstHour["dt_txt"]);

  const title = `${
    days[dtx.getDay()]
  }, <span style="font-size:14px"> ${dtx.getDate()} ${
    monthNames[dtx.getMonth()]
  } ${dtx.getFullYear()} </span>`;
  //   {
  //     name: "Chrome",
  //     y: 62.74,
  //   },

  const data = dayData.map((hourly) => {
    const converted = shouldConvert(hourly.temp, unit);
    return {
      name: `${new Date(hourly["dt_txt"]).getHours()}:00`,
      y: Math.round(converted),
    };
  });
  const options = {
    title: {
      text: title,
      useHtml: true,
      align: "left",
    },
    credits: {
      enabled: false,
    },
    chart: {
      height: "290px",
      type: "column",
    },
    xAxis: {
      type: "category",
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Temperature",
        data: data,
      },
    ],
  };

  return options;
};

export default makeChartOptions;
