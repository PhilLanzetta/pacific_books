import React from 'react'
import { Link, graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import HomeHero from '../components/homeHero'
import { BsArrowRight } from 'react-icons/bs'
import FeaturedTile from '../components/featuredTile'
import Carousel from '../components/carousel'
import NewsCarousel from '../components/newsCarousel'
import ShopCarousel from '../components/shopCarousel'
import { Fade } from 'react-awesome-reveal'

const Index = ({ data, location }) => {
  const featuredProjects = data.contentfulHomePage.featuredProjects
  const featuredPublications = data.contentfulHomePage.featuredPublications
  const featuredEditorial = data.contentfulHomePage.featuredEditorial
  const featuredNews = data.contentfulHomePage.featuredNews
  const featuredProducts = data.allShopifyProduct.nodes
  return (
    <Layout location={location}>
      <HomeHero></HomeHero>
      {/* <div className='home-about-preview'>
        <div className='home-about-preview-section'>
          <h2 className='home-about-headline'>
            <Fade triggerOnce>{data.contentfulHomePage.aboutHeadline}</Fade>
          </h2>
        </div>
        <div className='home-about-preview-section'>
          <Fade triggerOnce>
            <div
              className='home-about-excerpt'
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulHomePage.aboutExcerpt.childMarkdownRemark.html,
              }}
            ></div>
            <Link to='/about' className='learn-more-link'>
              <BsArrowRight></BsArrowRight> Learn More
            </Link>
          </Fade>
        </div>
      </div>
      <div className='featured-container'>
        <Fade triggerOnce>
          <Link to='/studio'>
            <h2>Featured Case Studies</h2>
          </Link>
          <div className='featured-tile-container'>
            {featuredProjects.map((project) => (
              <FeaturedTile key={project.id} project={project}></FeaturedTile>
            ))}
          </div>
        </Fade>
      </div>
      <div className='featured-container'>
        <Fade triggerOnce>
          <Carousel data={featuredPublications} slideCount={2.75}></Carousel>
        </Fade>
      </div>
      <div className='featured-container'>
        <Fade triggerOnce>
          <h2>Editorial</h2>
          <div className='featured-tile-container'>
            {featuredEditorial.map((project) => (
              <FeaturedTile key={project.id} project={project}></FeaturedTile>
            ))}
          </div>
        </Fade>
      </div>
      <div className='featured-container featured-product-container'>
        <ShopCarousel data={featuredProducts} slideCount={3}></ShopCarousel>
      </div>
      <div className='featured-container'>
        <Fade triggerOnce>
          <Link to='/news'>
            <h2>News</h2>
          </Link>
          <NewsCarousel data={featuredNews} slideCount={3}></NewsCarousel>
        </Fade>
      </div> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulHomePage {
      aboutHeadline
      aboutExcerpt {
        childMarkdownRemark {
          html
        }
      }
      featuredProjects {
        id
        featuredImage {
          gatsbyImageData
          description
        }
        caseStudy {
          title
          subtitle
          slug
        }
        width
      }
      featuredPublications {
        id
        featuredImage {
          gatsbyImageData
          description
        }
        caseStudy {
          title
          subtitle
          slug
        }
        width
      }
      featuredEditorial {
        id
        featuredImage {
          gatsbyImageData
          description
        }
        caseStudy {
          title
          subtitle
          slug
        }
        width
      }
      featuredNews {
        id
        newsTitle
        newsHeadline {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allShopifyProduct(
      filter: { collections: { elemMatch: { handle: { eq: "featured" } } } }
      limit: 3
    ) {
      nodes {
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        handle
        id
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        metafields {
          value
          key
        }
      }
    }
  }
`

export const Head = () => <Seo title='Home' />

export default Index
