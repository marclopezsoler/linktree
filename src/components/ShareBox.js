import { isMobile } from "react-device-detect";
import cross from "../assets/cross.svg";
import "./ShareBox.scss";
import SocialShareButton from "./SocialShareButton";
import link from "../assets/link.svg";
import { useState } from "react";

function ShareBox({ handleDotsClick, url }) {
  const facebookLink =
    "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);

  const linkedinLink =
    "https://www.linkedin.com/sharing/share-offsite/?url=" +
    encodeURIComponent(url);

  const twitterLink =
    "http://www.twitter.com/share?url=" + encodeURIComponent(url);

  const whatsappLink = "https://wa.me/?text=" + encodeURIComponent(url);

  const messengerLink = "https://www.messenger.com/new";

  const emailLink = "mailto:?subject=" + encodeURIComponent(url);

  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(url)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {!isMobile ? (
        <>
          <div className="share_box">
            <section className="first_row">
              <figure className="cross_parent_hidden">
                <img src={cross} className="cross_icon" />
              </figure>
              <p>Share this link</p>
              <figure className="cross_parent">
                <img
                  src={cross}
                  className="cross_icon"
                  onClick={handleDotsClick}
                />
              </figure>
            </section>
            <section className="share_buttons">
              <SocialShareButton social={"Facebook"} url={facebookLink} />
              <SocialShareButton social={"Linkedin"} url={linkedinLink} />
              <SocialShareButton social={"Twitter"} url={twitterLink} />
              <SocialShareButton social={"Whatsapp"} url={whatsappLink} />
              <SocialShareButton social={"Messenger"} url={messengerLink} />
              <SocialShareButton social={"Email"} url={emailLink} />
              <div className="copy_link_parent" onClick={handleCopyClick}>
                <div className="copy_link">
                  <img src={link} className="link_icon" />
                  {url.length >= 20 ? (
                    <p className="link">{url.substring(0, 20)}...</p>
                  ) : (
                    <p className="link">{url}</p>
                  )}
                </div>
                <p className={isCopied ? "active" : ""}>{isCopied ? "Copied!" : "Copy"}</p>
              </div>
            </section>
          </div>
          <div className="share_bg" onClick={handleDotsClick}></div>
        </>
      ) : (
        <>
          <div className="share_box_mobile">
            <p>SHARE BOX</p>
            {url.length >= 30 ? (
              <span>{url.substring(0, 30)}...</span>
            ) : (
              <span>{url}</span>
            )}
          </div>
          <div className="share_bg" onClick={handleDotsClick}></div>
        </>
      )}
    </>
  );
}

export default ShareBox;
