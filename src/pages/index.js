import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Navigation from '../components/navigation/navigation.component'
import Hero from '../components/hero/hero.component'
import Gallery from '../components/gallery/gallery.component'
import About from '../components/about/about.component'
import InfoSection from "../components/info-section/info-section.component"
import ContactForm from '../components/contact/contact-form.component'
import './index.css'

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
    <main id='top'>
      <Navigation />
      <Hero />
      <About />
      <Gallery imageList={imageList.datoCmsImageGallery.photos}/>
      <InfoSection />
      <ContactForm />
    </main>
  )
}

export default IndexPage
