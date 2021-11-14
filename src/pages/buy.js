import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => (
  <Layout>
    <Seo title="Get Twitchifier" />
    <h1 style={{marginTop: `64px`}}>Get Twitchifier</h1>
    <p style={{fontSize: `1.1rem`, marginBottom: `64px`, lineHeight: `170%`}}>Twitchifier is currently available for <span class="highlight">Windows</span> and <span class="highlight">Linux (AppImage)</span>. A version for Mac might come in the near future.</p>
    <p className="info" style={{}}>I'm using Stripe as my payment partner. The link below will open a new window and redirect you to the payment site.</p>
    <a href="https://buy.stripe.com/4gw5nja2v8b6bBK5kk" target="_blank">
      <button className="checkout" role="link">
        Buy now
      </button>
    </a>
    {/* https://buy.stripe.com/test_6oE9Cr2CVacma4M144 */}
  </Layout>
);

export default AboutPage;
