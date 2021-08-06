import { Typography } from "@material-ui/core";
import React from "react";

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
const Welcome = () => {
  const dtx = new Date();
  return (
    <>
      <Typography variant={"h5"}>Welcome</Typography>
      <Typography variant={"caption"}>
        {dtx.getDate()} {monthNames[dtx.getMonth()].toUpperCase()}{" "}
        {dtx.getFullYear()}
      </Typography>
      <Typography
        variant={"h5"}
        style={{
          marginTop: 15,
        }}
      >
        Munich
      </Typography>
    </>
  );
};

export default Welcome;
