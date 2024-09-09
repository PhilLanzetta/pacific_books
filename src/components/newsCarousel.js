import { Link } from 'gatsby'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Slider from 'react-slick'

function NextArrow(props) {
  const { onClick } = props
  return (
    <div
      className={props.addClassName}
      onClick={onClick}
      onKeyDown={onClick}
      role='button'
      tabIndex={0}
      aria-label='go to next'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 30 30'
        className='hero-svg'
      >
        <path
          id='Path_118'
          data-name='Path 118'
          d='M0,8,5.436,0,11,8'
          transform='translate(19.688 9.5) rotate(90)'
          fill='none'
        />
      </svg>
    </div>
  )
}

function PrevArrow(props) {
  const { onClick } = props
  return (
    <div
      className={props.addClassName}
      onClick={onClick}
      onKeyDown={onClick}
      role='button'
      tabIndex={0}
      aria-label='go to previous'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 30 30'
        className='hero-svg'
      >
        <path
          id='Path_118'
          data-name='Path 118'
          d='M0,0,5.436,8,11,0'
          transform='translate(18.313 9.5) rotate(90)'
          fill='none'
        />
      </svg>
    </div>
  )
}

const NewsCarousel = ({ data, slideCount }) => {
  const settings = {
    slidesToShow: slideCount,
    className: 'center',
    infinite: true,
    useTransform: false,
    centerMode: true,
    centerPadding: '6vw',
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
          arrows: true,
          nextArrow: <NextArrow addClassName='next-button' />,
          prevArrow: <PrevArrow addClassName='prev-button' />,
        },
      },
    ],
  }

  return (
    <Slider {...settings} className='featured-news-container'>
      {data.map((news) => (
        <Link to='/news' key={news.id} className='featured-news-link'>
          <p>{news.newsTitle}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: news.newsHeadline.childMarkdownRemark.html,
            }}
          ></div>
          <div className='learn-more-link'>
            <BsArrowRight></BsArrowRight> Read More
          </div>
        </Link>
      ))}
    </Slider>
  )
}

export default NewsCarousel
