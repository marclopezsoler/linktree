import Card from "./Card";
import Header from "./Header";
import "./Linktree.scss";
import DotsInfo from "./DotsInfo";
import ShareBox from "./ShareBox";

function Linktree() {
  return (
    <div className="linkTree">
      <ShareBox />
      <DotsInfo />
      <section className="section_1">
        <Header />
      </section>
      <section className="section_2">
        <Card img={""} name={"🖥️ website portfolio"} url={"https://marclopez.oddsolutionslab.com"}/>
        <Card img={""} name={"🛠️ github"} url={"https://github.com/marclopezsoler"}/>
        <Card img={""} name={"📷 instagram"} url={"https://www.instagram.com/lopezsmarc/"}/>
        <Card img={""} name={"🐦 twitter"} url={"https://twitter.com/marclopezsoler"}/>
        <Card img={""} name={"💼 linkedin"} url={"https://www.linkedin.com/in/marc-l%C3%B3pez-soler-aab6b81a3/"}/>
      </section>
    </div>
  );
}

export default Linktree;
