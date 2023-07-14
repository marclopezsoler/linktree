import "./Header.scss";
import logo_image from "../assets/logo.png";

function Header() {
  const user = "@lopezsmarc";
  const name = "";
  // const name = "Marc López Soler";
  return (
    <>
      <img src={logo_image} />
      <h1>{user}</h1>
      {name == "" ? null : <span>{name}</span>}
    </>
  );
}

export default Header;
