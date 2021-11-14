/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <div style={{padding: `0 16px`}}>
      <div id="background"></div>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1004,
          padding: `0`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `4rem`,
          }}
        >
          © {new Date().getFullYear()}
          {` `}
          <a href="https://www.icyfeva.com" target="_blank">IcyFeVA</a> | Need help? support[at]twitchifier.com
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
