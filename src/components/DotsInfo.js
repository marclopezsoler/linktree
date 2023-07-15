import dots from "../assets/dots.svg";
import "./DotsInfo.scss";

function DotsInfo(){
return(
   <section className="header_dots">
      <img src={dots} className="dots_header"/>
      <img src={dots} className="dots_header_2"/>
   </section>
)
}

export default DotsInfo;