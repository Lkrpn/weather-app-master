import React from "react";
import { connect } from "react-redux";
import { CELCIUS } from "../store/types";

export const CelFah = ({ unit }) => {
  const celfah = unit === CELCIUS ? "℃" : "℉";
  return celfah;
};
const mapStateToProps = (state) => ({
  unit: state.unit,
});
export default connect(mapStateToProps)(CelFah);
