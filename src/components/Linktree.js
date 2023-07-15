import Card from "./Card";
import Header from "./Header";
import "./Linktree.scss";
import DotsInfo from "./DotsInfo";
import ShareBox from "./ShareBox";
import { useState } from "react";

function Linktree() {
  const [boxState, setBoxState] = useState(false);
  const [dotsUrl, setDotsUrl] = useState("");

  const handleDotsClick = (url) => {
    setBoxState(!boxState);
    setDotsUrl(url);
  }

  return (
    <div className="linkTree">
      {boxState && <ShareBox handleDotsClick={handleDotsClick} url={dotsUrl}/>}
      <div className={boxState ? "linkTreeContent unselectable" : "linkTreeContent"}>
        <DotsInfo handleDotsClick={handleDotsClick}/>
        <section className="section_1">
          <Header />
        </section>
        <section className="section_2">
          <Card img={""} name={"🖥️ website portfolio"} url={"https://marclopez.oddsolutionslab.com"} handleDotsClick={handleDotsClick}/>
          <Card img={""} name={"🛠️ github"} url={"https://github.com/marclopezsoler"} handleDotsClick={handleDotsClick}/>
          <Card img={""} name={"📷 instagram"} url={"https://www.instagram.com/lopezsmarc/"} handleDotsClick={handleDotsClick}/>
          <Card img={""} name={"🐦 twitter"} url={"https://twitter.com/marclopezsoler"} handleDotsClick={handleDotsClick}/>
          <Card img={""} name={"💼 linkedin"} url={"https://www.linkedin.com/in/marc-l%C3%B3pez-soler-aab6b81a3/"} handleDotsClick={handleDotsClick}/>
        </section>
      </div>
    </div>
  );
}

export default Linktree;
