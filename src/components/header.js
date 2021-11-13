import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle, menuLinks }) => (
  <header className="header">
    <h1>
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
        <ul className="navigation">
          {menuLinks.map((link) => (
            <Link
              to={link.link}
              activeClassName="active"
              className="navigationItem"
              key={link.name}
            >
              <li
                style={{
                  listStyleType: `none`,
                }}
              >
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
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
