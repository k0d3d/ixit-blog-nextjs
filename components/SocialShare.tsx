import React from "react";

export function SocialShare({url}) {
  return (
    <div className="social-icon">
      <ul className="d-flex align-items-center justify-content-between">
        <li>
          <a href={url}>
            <img src="assets/img/svg/facebook.svg" />
          </a>
        </li>
        <li>
          <a href={url}>
            <img src="assets/img/svg/instagram.svg" />
          </a>
        </li>
        <li>
          <a href={url}>
            <img src="assets/img/svg/twitter.svg" />
          </a>
        </li>
        <li>
          <a href={url}>
            <img src="assets/img/svg/youtube.svg" />
          </a>
        </li>
      </ul>
    </div>
  );
}
