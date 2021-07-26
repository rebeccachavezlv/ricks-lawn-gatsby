import * as React from "react"
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import Hero from '../components/hero/hero.component'
import About from '../components/about/about.component'
import PortfolioPreview from '../components/portfolio-preview/portfolio-preview.component'
import InfoSection from "../components/info-section/info-section.component"

const IndexPage = () => {
  const imageList = useStaticQuery(graphql`query {
      datoCmsImageGallery {
        photos {
          url
        }
      }
    }`
  )

  return (
    <Layout id='top'>
      <Hero />
      <About />
      <PortfolioPreview imageList={imageList.datoCmsImageGallery.photos}/>
      <InfoSection />
    </Layout>
  )
}

export default IndexPage