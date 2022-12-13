import React from "react";
import "./stars.css";
import redstar from "../../assets/redstar.png";
import greystar from "../../assets/greystar.png";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating_icon"
            src={redstar}
            alt="red star"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating_icon"
            src={greystar}
            alt="grey star"
          />
        )
      )}
    </div>
  );
};
export default Rating;
