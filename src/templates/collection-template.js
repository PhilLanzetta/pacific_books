import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import ProductTile from '../components/productTile'
import Seo from '../components/seo'

const CollectionTemplate = ({ data, location }) => {
  const products = data.shopifyCollection.products
  const allCollections = data.allShopifyCollection.nodes

  return (
    <Layout location={location}>
      <h2 className='collection-page-filter'>Filter:</h2>
      <div className='product-tag-container'>
        {allCollections.map((collection) => (
          <Link
            key={collection.id}
            to={`/collections/${collection.handle}`}
            activeClassName='active-filter-button'
          >
            {collection.title}
          </Link>
        ))}
      </div>

      <div className='product-tiles-container'>
        {products.map((product) => (
          <ProductTile key={product.id} product={product}></ProductTile>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleCollection($handle: String) {
    shopifyCollection(handle: { eq: $handle }) {
      products {
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        handle
        id
        collections {
          title
        }
        metafields {
          key
          value
        }
        title
        tags
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        totalInventory
      }
    }
    allShopifyCollection(sort: { title: ASC }) {
      nodes {
        id
        title
        handle
      }
    }
  }
`

export const Head = () => <Seo title='Shop' />

export default CollectionTemplate
