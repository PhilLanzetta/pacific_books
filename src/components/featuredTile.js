import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const FeaturedTile = ({ project }) => {
  const { slug, title, subtitle } = project.caseStudy
  return (
    <Link to={`/studio/${slug}`} className={`featured-${project.width}`}>
      <GatsbyImage
        image={project.featuredImage.gatsbyImageData}
        alt={project.featuredImage.description}
        className={`featured-image-${project.width}`}
      ></GatsbyImage>
      <h3 className='featured-tile-title'>{title}</h3>
      <h4 className='featured-tile-subtitle'>{subtitle}</h4>
    </Link>
  )
}

export default FeaturedTile
