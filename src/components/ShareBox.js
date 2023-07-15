import "./ShareBox.scss";

function ShareBox({ handleDotsClick, url }) {
  return (
    <>
      <div className="share_box">
        <p>SHARE BOX</p>
        <span>{url}</span>
      </div>
      <div className="share_bg" onClick={handleDotsClick}></div>
    </>
  );
}

export default ShareBox;
