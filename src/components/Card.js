import "./Card.scss";
import dots from "../assets/dots.svg";
import { isMobile } from "react-device-detect";

function Card({ img, name, url }) {
  if (!img) {
    img = "";
  }

  return (
    <>
      {isMobile ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="card_mobile"
        >
          {img ? (
            <img src={img} className="main_image_mobile" />
          ) : (
            <img className="main_image_empty_mobile" />
          )}
          <p>{name}</p>
          <img src={dots} className="dots_mobile" />
        </a>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="card_desktop"
        >
          {img ? (
            <img src={img} className="main_image_desktop" />
          ) : (
            <img className="main_image_empty_desktop" />
          )}
          <p>{name}</p>
          <img src={dots} className="dots_desktop" />
        </a>
      )}
    </>
  );
}

export default Card;
