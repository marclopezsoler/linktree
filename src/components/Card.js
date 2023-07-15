import "./Card.scss";
import dots from "../assets/dots.svg";
import { isMobile } from "react-device-detect";

function Card({ img, name, url, handleDotsClick }) {

  const dotsUrl = url;

  const handleClick = (event) => {
    event.preventDefault();
   handleDotsClick(dotsUrl);
  }

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
          <img src={dots} className="dots_mobile" onClick={handleClick}/>
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
          <img src={dots} className="dots_desktop" onClick={handleClick}/>
        </a>
      )}
    </>
  );
}

export default Card;
