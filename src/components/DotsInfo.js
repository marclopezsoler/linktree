import { isMobile } from "react-device-detect";
import dots from "../assets/dots.svg";
import "./DotsInfo.scss";

function DotsInfo({ handleDotsClick }) {
  const dotsUrl = "links.oddsolutionslab.com";

  const handleClick = () => {
    handleDotsClick(dotsUrl);
  };

  return (
    <>
      {isMobile ? (
        <section className="header_dots">
          <img src={dots} className="dots_header_mobile" onClick={handleClick} />
          <img src={dots} className="dots_header_2" />
        </section>
      ) : (
        <section className="header_dots">
          <img src={dots} className="dots_header" onClick={handleClick} />
          <img src={dots} className="dots_header_2" />
        </section>
      )}
    </>
  );
}

export default DotsInfo;
