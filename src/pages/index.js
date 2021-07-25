import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Navigation from '../components/navigation/navigation.component'
import Hero from '../components/hero/hero.component'
import Gallery from '../components/gallery/gallery.component'
import ImageTest from '../components/image-test/image-test.component'
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
      {/* <ImageTest imageList={imageList.datoCmsImageGallery.photos} /> */}
      <Hero />
      <Gallery imageList={imageList.datoCmsImageGallery.photos}/>
    </main>
  )
}

export default IndexPage
