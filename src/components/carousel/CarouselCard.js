import React, { useEffect } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton } from "@material-ui/core";
import WeatherCard from "../card/WeatherCard";
import { connect } from "react-redux";

const CarouselCard = ({ onClick, showCard, activeIndex, cardData }) => {
  useEffect(() => {}, [cardData]);
  return (
    <Carousel
      breakPoints={[
        {
          width: 1,
          itemsToShow: 1,
        },
        {
          width: 600,
          itemsToShow: 2,
        },
        {
          width: 900,
          itemsToShow: 3,
        },
      ]}
      itemsToShow={showCard ? 3 : 1}
      itemPadding={[0, 0, 0, 0]}
      pagination={false}
      initialActiveIndex={activeIndex}
      showEmptySlots={false}
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
      {cardData===undefined&&
        <span></span>
      }
      {cardData &&
        cardData.map((card, idx) => (
          <WeatherCard
            key={card.dt_txt}
            onClick={onClick}
            card={card}
            pos={idx}
          />
        ))}
    </Carousel>
  );
};

const mapStateToProps = (state) => ({
  cardData: state.cardData,
});
export default connect(mapStateToProps)(CarouselCard);
