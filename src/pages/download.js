import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => (
  <Layout>
    <Seo title="Download Twitchifier" />
    <h1 style={{marginTop: `64px`}}>Download Twitchifier</h1>
    <p style={{fontSize: `1.1rem`, marginBottom: `24px`, lineHeight: `170%`}}>Twitchifier is currently available for <span class="highlight">Windows</span> and <span class="highlight">Linux (AppImage)</span>. A version for Mac might come in the near future.</p>
    <a href="https://mega.nz/folder/dMwCSA6T#bH6RZX3s9tFFvIj9cUyivw" target="_blank">
      <button className="checkout" role="link">
        Download
      </button>
    </a>
    <p className="info" style={{marginTop: `64px`}}>If this app is useful to you, or if you just want to show support, donations are always welcome :)</p>
    <a href="https://www.paypal.com/donate/?hosted_button_id=32YAVS6TP3ZUU" target="_blank">
      <button className="checkout" role="link">
        Donate Now
      </button>
    </a>
  </Layout>
);

export default AboutPage;
