import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/header.png"
      width={1023}
      quality={90}
      formats={["auto", "webp", "avif"]}
      alt="header image"
      style={{ marginBottom: `1.45rem`, marginTop: `-32px` }}
    />
      <StaticImage
      src="../images/howitworks.png"
      width={1021}
      quality={90}
      formats={["auto", "webp", "avif"]}
      alt="header image"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
