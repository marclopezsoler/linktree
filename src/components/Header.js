import "./Header.scss";
import logo_image from "../assets/logo.png";
import { useEffect } from "react";

function Header() {
  const user = "@lopezsmarc";
  const name = "";
  // const name = "Marc López Soler";

  useEffect(() =>{
    const header = document.querySelector('.header_small')
    
    const handleScroll = () => {

      if (window.scrollY >= 66) {
        header.classList.add("show_header");
        header.classList.remove("hide_header");
      } else {
        header.classList.remove("show_header");
        header.classList.add("hide_header");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return() => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <>
        <img src={logo_image} className="header_big_image"/>
        <h1>{user}</h1>
        {name == "" ? null : <span>{name}</span>}
      </>
      <div className="header_small">
        <img src={logo_image} className="header_small_image"/>
      </div>
    </>
  );
}

export default Header;
