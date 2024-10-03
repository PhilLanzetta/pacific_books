import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const About = ({ data }) => {
  const { artists, collections } = data.contentfulAboutPage
  const { aboutText, images } = data.contentfulPublishingAbout

  return (
    <Layout>
      <div className='about-page'>
        <div className='about-section'>
          <div
            dangerouslySetInnerHTML={{
              __html: aboutText.childMarkdownRemark.html,
            }}
            className='pub-about-text'
          ></div>
          <div>
            <GatsbyImage
              image={images[0].gatsbyImageData}
              alt={images[0].description}
            ></GatsbyImage>
          </div>
        </div>
        <div className='about-section'>
          <div>
            <GatsbyImage
              image={images[1].gatsbyImageData}
              alt={images[1].description}
            ></GatsbyImage>
          </div>
          <div className='pub-collections-artists-container'>
            <div>
              <p className='collections-preface'>
                Our design and publishing work is held in the following
                collections
              </p>
              <ul className='collections-list'>
                {collections.map((collection, index) => (
                  <li key={index}>{collection}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className='collections-preface'>Select artists</p>
              <ul
                className='collections-list'
                dangerouslySetInnerHTML={{
                  __html: artists.childMarkdownRemark.html.replace(
                    /href/g,
                    "target='_blank' rel='noreferrer' href"
                  ),
                }}
              ></ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulAboutPage {
      artists {
        childMarkdownRemark {
          html
        }
      }
      collections
    }
    contentfulPublishingAbout {
      images {
        gatsbyImageData
        id
        description
      }
      aboutText {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
export const Head = () => <Seo title='About' />

export default About
