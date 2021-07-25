import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

import './image-test.styles.scss'

const ImageTest = ({ imageList }) => (
    <div className='container'>
        <GatsbyImage src={imageList[0].gatsbyImageData}></GatsbyImage>
    </div>
)

export default ImageTest

export const query = graphql`query {
    datoCmsImageGallery {
      photos {
        gatsbyImageData(
            width: 600,
            placeholder: BLURRED,
            forceBlurhash: false,
            imgixParams: { invert: true }
          )
      }
    }
  }`