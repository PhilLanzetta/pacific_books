import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'
import { Fade } from 'react-awesome-reveal'
import { RiLayoutGridFill } from 'react-icons/ri'
import { PiListBold } from 'react-icons/pi'
import { RiArrowRightLine } from 'react-icons/ri'

const Publishing = ({ data, location }) => {
  const publishing = data.allContentfulCaseStudy.nodes

  const [view, setView] = useState()

  useEffect(() => {
    if (localStorage.getItem('pubView')) {
      setView(localStorage.getItem('pubView'))
    } else {
      setView('grid')
    }
  }, [])

  return (
    <Layout location={location}>
      <h1 className='product-page-title'>Publishing</h1>
      <div className='product-tag-container'>
        <Link to='/publishing' activeClassName='active-filter-button'>
          Design
        </Link>
        <Link to='/publishing/imprint' activeClassName='active-filter-button'>
          Imprint
        </Link>
        <button
          className={`view-button ${view === 'grid' ? '' : 'faded'}`}
          onClick={() => {
            localStorage.setItem('pubView', 'grid')
            setView('grid')
          }}
        >
          Grid
          <RiLayoutGridFill></RiLayoutGridFill>
        </button>
        <button
          className={`view-button ${view === 'list' ? '' : 'faded'}`}
          onClick={() => {
            localStorage.setItem('pubView', 'list')
            setView('list')
          }}
        >
          List
          <PiListBold></PiListBold>
        </button>
      </div>
      <div
        className={
          view === 'grid' ? 'projects-container' : 'list-projects-container'
        }
      >
        {view === 'grid' && (
          <div className='project-tiles-container'>
            {publishing.map((project) => (
              <Fade
                className='project-tile'
                triggerOnce={true}
                key={project.id}
              >
                <Link to={`/studio/${project.slug}`}>
                  {project.tileImage && (
                    <GatsbyImage
                      image={project.tileImage.image.gatsbyImageData}
                      alt={project.tileImage.image.description}
                    ></GatsbyImage>
                  )}
                  <p className='project-tile-title'>
                    <em>{project.title}</em>
                  </p>
                  <p>{project.subtitle}</p>
                </Link>
              </Fade>
            ))}
          </div>
        )}
        {view === 'list' && (
          <div className='project-list-container'>
            {publishing.map((project) => (
              <Fade triggerOnce={true} key={project.id}>
                <Link
                  to={`/studio/${project.slug}`}
                  className='project-listing'
                >
                  <div className='project-listing-text-pub'>
                    <p>{project.title}</p>
                    <p>
                      <em>{project.subtitle}</em>
                    </p>
                    <p>
                      <span className='list-view-go'>
                        View Project <RiArrowRightLine></RiArrowRightLine>
                      </span>
                    </p>
                  </div>
                  {project.tileImage && (
                    <GatsbyImage
                      image={project.tileImage.image.gatsbyImageData}
                      alt={project.tileImage.image.description}
                      className='listing-image'
                    ></GatsbyImage>
                  )}
                </Link>
              </Fade>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulCaseStudy(
      filter: { category: { eq: "Publishing" } }
      sort: { order: DESC }
    ) {
      nodes {
        id
        tileImage {
          image {
            gatsbyImageData
            description
          }
        }
        slug
        isFeatured
        subtitle
        title
      }
    }
    allContentfulTag(sort: { name: ASC }) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title='Publishing' />

export default Publishing
