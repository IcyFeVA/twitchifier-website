import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="Why" />
    <h1 style={{marginTop: `64px`}}>Why was Twitchifier born?</h1>
    <p style={{fontSize: `1.1rem`, marginBottom: `64px`, lineHeight: `170%`}}>
      Hello there!<br /><br />
      My name is Pascal. I created this app, because I was looking for a way to know when my favorite streamers go online, without having to constantly check the website, or install the offical Twitch app.<br />
      I'm following a ton of streamers, but I don't necessarily need to get notified, anytime one of them goes live. Otherwise I would get flooded by notifications. So, if you're weird like me, you might want to buy this app :)
    </p>
  </Layout>
)

export default AboutPage
