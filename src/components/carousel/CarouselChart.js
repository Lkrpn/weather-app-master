import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton } from "@material-ui/core";
import WeatherChart from "../card/WeatherChart";
import { connect } from "react-redux";

const CarouselChart = ({ onClick, chartData, activeIndex }) => {
  return (
    <Carousel
      itemPadding={[0, 0, 0, 0]}
      itemsToShow={1}
      pagination={false}
      initialActiveIndex={activeIndex}
      renderArrow={({ type, onClick, isEdge }) => {
        const pointer =
          type === consts.PREV ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;
        return (
          <IconButton
            disableFocusRipple
            disableRipple
            disableTouchRipple
            style={{
              visibility: isEdge ? "hidden" : "visible",
              width: 50,
              height: 50,
              alignSelf: "center",
            }}
            onClick={onClick}
          >
            {pointer}
          </IconButton>
        );
      }}
    >
      {chartData!==null&&
        chartData.map((data,idx)=><WeatherChart key={idx} data={data} pos={idx} onClick={onClick}/>)
      }
    </Carousel>
  );
};
const mapStateToProps = (state) => ({
  chartData: state.chartData,
});
export default connect(mapStateToProps)(CarouselChart);
