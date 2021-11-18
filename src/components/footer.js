import * as React from "react";

const Footer = () => (
  <footer>
    <div className="content"
      style={{
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <div>
        © {new Date().getFullYear()}
        {` `}
        <a href="https://www.icyfeva.com" target="_blank">
          IcyFeVA
        </a>
      </div>
      <a
        href="https://www.producthunt.com/posts/twitchifier?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-twitchifier"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=319819&theme=dark"
          alt="Twitchifier - Get notified when your favorite streamers go live | Product Hunt"
          style={{ width: `250px`, height: `54px` }}
          width="250"
          height="54"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
