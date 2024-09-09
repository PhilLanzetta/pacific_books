import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'

const ProductTile = ({ product }) => {
  const {
    handle,
    featuredImage,
    tags,
    totalInventory,
    priceRangeV2,
    metafields,
  } = product
  const inquire = tags.includes('Inquire')
  const forthcoming = tags.includes('Forthcoming')
  const preSale = tags.includes('Pre-sale')
  const hideOutOfPrint = tags.includes('Hide OUT OF PRINT')
  const notStocked = tags.includes('Not Stocked')

  const tagline = metafields.filter(
    (metafield) => metafield.key === 'tagline'
  )[0]?.value

  return (
    <Fade triggerOnce={true} className='product-tile'>
      <Link to={`/shop/${handle}`}>
        <div className='product-tile-image'>
          <GatsbyImage
            image={featuredImage?.localFile.childImageSharp.gatsbyImageData}
          ></GatsbyImage>
          <div className='payment-info'>
            {totalInventory > 0 && (
              <p>${priceRangeV2.minVariantPrice.amount}</p>
            )}
            {totalInventory < 1 && (
              <p className='product-status'>
                {inquire && 'Inquire'}
                {forthcoming && 'Forthcoming'} {preSale && 'Pre-sale'}
                {!inquire &&
                  !forthcoming &&
                  !preSale &&
                  !notStocked &&
                  !hideOutOfPrint &&
                  'Out of Print'}
              </p>
            )}
          </div>
          {totalInventory < 1 && notStocked && (
            <div className='sold-out-sticker'>
              Sold <br />
              Out
            </div>
          )}
        </div>
        {tagline && (
          <div
            dangerouslySetInnerHTML={{ __html: tagline }}
            className='product-tile-title'
          ></div>
        )}
      </Link>
    </Fade>
  )
}

export default ProductTile
