import { Switch } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { CELCIUS, FAHRENHEIT } from "./store/types";
import { setUnit } from "./store/actions";

const UnitChanger = ({ unit, setUnit }) => {
  const [checked, setChecked] = useState(unit);
  const handleChange = (e) => {
    const val = e.target.checked;
    setChecked(val);
    setUnit(val ? FAHRENHEIT : CELCIUS);
  };
  return (
    <>
      <label>℃</label>
      <Switch color="primary" checked={checked} onChange={handleChange} />
      <label>℉</label>
    </>
  );
};

const mapStateToProps = (state) => ({
  unit: state.unit === CELCIUS ? false : true,
});
const mapDispatchToProps = (dispatch) => ({
  setUnit: (payload) => dispatch(setUnit(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UnitChanger);
