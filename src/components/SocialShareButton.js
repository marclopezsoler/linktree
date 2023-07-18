import { useEffect } from "react";
import "./SocialShareButton.scss";
import { useState } from "react";
import arrow from "../assets/arrow.svg";

function SocialShareButton({ social, url }) {
  const [socialIcon, setSocialIcon] = useState("");

  useEffect(() => {
    const loadSocialIcon = async () => {
      try {
        const response = await import(`../assets/social_icons/${social}.svg`);
        setSocialIcon(response.default);
      } catch (error) {
        console.error(`Failed to load ${social} icon:`, error);
      }
    };

    loadSocialIcon();
  }, [social]);

  return (
    <a href={url} target="_blank" className="social_button_parent">
      <div className="social_button">
        {social === "Email" || social === "Messenger" ? (
          <img src={socialIcon} className="social_icon_2" />
        ) : (
          <img src={socialIcon} className="social_icon" />
        )}
        Share on {social}
      </div>
      <img src={arrow} className="arrow" />
    </a>
  );
}

export default SocialShareButton;
