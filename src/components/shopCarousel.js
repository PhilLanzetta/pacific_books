import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Slider from 'react-slick'

const ShopCarousel = ({ data, slideCount }) => {
  const settings = {
    slidesToShow: slideCount,
    infinite: false,
    useTransform: false,
    dots: false,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1.15,
          arrows: false,
        },
      },
    ],
  }

  return (
    <Fade triggerOnce>
      <Link to='/collections/everything'>
        <h2>Shop</h2>
      </Link>
      <Slider {...settings} className='featured-news-container'>
        {data.map((product) => {
          const { featuredImage, handle, id, priceRangeV2, metafields } =
            product
          const tagline = metafields.filter(
            (metafield) => metafield.key === 'tagline'
          )
          return (
            <Link
              to={`/shop/${handle}`}
              key={id}
              className='featured-shop-link'
            >
              <GatsbyImage
                image={featuredImage.localFile.childImageSharp.gatsbyImageData}
              ></GatsbyImage>
              <div className='featured-product-info'>
                <div
                  dangerouslySetInnerHTML={{ __html: tagline[0].value }}
                  className='featured-product-text'
                ></div>
                <p>${priceRangeV2.minVariantPrice.amount}</p>
              </div>
            </Link>
          )
        })}
      </Slider>
    </Fade>
  )
}

export default ShopCarousel
