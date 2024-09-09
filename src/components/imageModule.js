import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const ImageModule = ({ content }) => {
  return (
    <Fade triggerOnce>
      <div
        className={`image-module-container ${
          content.fullBleed ? '' : 'normal-margin'
        }`}
      >
        {content.images.map((image) => (
          <GatsbyImage
            image={image.image?.gatsbyImageData}
            alt={image.image?.description}
            className={`image-module-${content.columns}`}
          ></GatsbyImage>
        ))}
      </div>
    </Fade>
  )
}

export default ImageModule
