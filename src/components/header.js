import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle, menuLinks }) => (
  <header style={{}}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1004,
        padding: `0`,
        paddingTop: `48px`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <StaticImage
            src="../images/logo.twitchifier.png"
            width={220}
            quality={70}
            formats={["auto", "webp", "avif"]}
            alt="Twitchifier Logo"
          />
        </Link>
      </h1>
      <div>
        <nav>
          <ul style={{ display: "flex", flex: 1 }}>
            {menuLinks.map((link) => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1rem`,
                }}
              >
                <Link style={{ color: `white` }} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
