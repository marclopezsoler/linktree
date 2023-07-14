import Card from "./Card";
import Header from "./Header";
import "./Linktree.scss";

function Linktree() {
  return (
    <div className="linkTree">
      <section className="section_1">
        <Header />
      </section>
      <section className="section_2">
        <Card name={"website portfolio"} url={"https://marclopez.oddsolutionslab.com"}/>
        <Card name={"github"} />
        <Card name={"cards"} />
        <Card name={"yes"} />
        <Card name={"doing"} />
        <Card name={"problems"} />
      </section>
    </div>
  );
}

export default Linktree;
