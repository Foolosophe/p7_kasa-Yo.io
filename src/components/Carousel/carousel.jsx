import { useState } from "react";
import nextIcon from "../../assets/chevronDroit.png";
import previousIcon from "../../assets/chevronGauche.png";
import "./carousel.css";

export default function Carousel({ img }) {
  const numberPicture = img.length;
  const firstPicture = img[0];
  const lastPicture = img[numberPicture - 1];
  const [pictureActual, setPictureActual] = useState(firstPicture);
  const pictureIndex = img.indexOf(pictureActual);

  const next = () => {
    if (pictureActual === lastPicture) {
      setPictureActual(firstPicture);
    } else {
      setPictureActual(img[pictureIndex + 1]);
    }
  };

  const previous = () => {
    if (pictureActual === firstPicture) {
      setPictureActual(lastPicture);
    } else {
      setPictureActual(img[pictureIndex - 1]);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel_container">
        <img
          src={pictureActual}
          alt={pictureActual.title}
          className="carousel_img"
        />
      </div>
      {numberPicture !== 1 && (
        <div className="carousel_controls">
          <img
            src={previousIcon}
            className="chevronLeft"
            alt="previous"
            onClick={() => previous(pictureActual)}
          />
          <img
            src={nextIcon}
            className="chevronRight"
            alt="next"
            onClick={() => next(pictureActual)}
          />
          <div className="carousel_Index">
            {img.indexOf(pictureActual) + 1} / {numberPicture}
          </div>
        </div>
      )}
    </div>
  );
}
