import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import HideOnScroll from './hideOnScroll'
import Cart from './cart'
import useStore from '../context/StoreContext'
import Logo from '../images/logo.svg'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from './customForm'
import { AnimatePresence } from 'framer-motion'

const postUrl = process.env.GATSBY_MAIL_KEY

const Header = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyCollection(sort: { title: ASC }) {
        nodes {
          id
          handle
          title
        }
      }
    }
  `)
  const collections = data.allShopifyCollection.nodes
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const showCart = location?.pathname !== '/'
  const { cart } = useStore()

  return (
    <>
      <header>
        <div className='header-menu'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            id='nav-icon'
            className={`${isOpen ? 'open' : ''}`}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <HideOnScroll>
          <Link to='/'>
            <img src={Logo} alt='Pacific'></img>
          </Link>
        </HideOnScroll>
        <div></div>
        {showCart && (
          <div className='shop-cart'>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className='shop-bag-button'
            >
              <p>
                Cart{'  '}
                {cart.length > 0 ? (
                  <span className='cart-number'>
                    (
                    {cart
                      .map((item) => item.quantity)
                      .reduce((prev, next) => prev + next)}
                    )
                  </span>
                ) : (
                  ''
                )}
              </p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='cart-icon'
                viewBox='0 0 43.963 36.303'
              >
                <path
                  id='Path_3'
                  data-name='Path 3'
                  d='M11.785,45.8a.3.3,0,0,0,.114.228v.057l.171.171h.057a.3.3,0,0,0,.228.114h0L35.039,54.35a.514.514,0,0,0,.285.057,1.2,1.2,0,0,0,.627-.228L55.215,34.915a.846.846,0,0,0,.228-.8.9.9,0,0,0-.57-.627l-.912-.228a24.972,24.972,0,0,1-.228-2.964,10.983,10.983,0,0,1,.057-1.368l1.368-1.368a.846.846,0,0,0,.228-.8.9.9,0,0,0-.57-.627L32.132,18.158a.809.809,0,0,0-.912.228L12.013,37.594h0c-.057.057-.114.114-.114.171v.057c0,.057-.057.057-.057.114v.114a21.318,21.318,0,0,0-.342,3.876,21.392,21.392,0,0,0,.285,3.876Zm11.057-3.078L33.5,46.485a25.951,25.951,0,0,0-.228,3.021,19.385,19.385,0,0,0,.171,2.565L14.065,45.231,13.381,45a17.765,17.765,0,0,1-.228-3.078,19.385,19.385,0,0,1,.171-2.565Zm30.036-9.29-1.026,1.026L34.583,51.671c-.057-.684-.114-1.425-.114-2.166a19.608,19.608,0,0,1,.171-2.622l.4.171a.514.514,0,0,0,.285.057,1.2,1.2,0,0,0,.627-.228L46.837,36l5.813-5.813v.171A18.651,18.651,0,0,0,52.878,33.433Z'
                  transform='translate(-11.5 -18.104)'
                />
              </svg>
            </button>
          </div>
        )}
      </header>
      <div className={`secondary-menu ${isOpen ? 'menu-show' : 'menu-hide'}`}>
        <div className='secondary-main'>
          {collections.map((collection) => (
            <Link key={collection.id} to={`/collections/${collection.handle}`}>
              {collection.title}
            </Link>
          ))}
          <Link to='/about' onClick={() => setIsOpen(false)}>
            About
          </Link>
          <a
            href='https://pacific-studio-dev.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            Studio &rarr;
          </a>
        </div>
        <div className='secondary-sub'>
          <Link to='/news' onClick={() => setIsOpen(false)}>
            News
          </Link>
          <Link to='/press' onClick={() => setIsOpen(false)}>
            Press
          </Link>
          <Link to='/connect' onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link to='/connect' onClick={() => setIsOpen(false)}>
            Partnerships
          </Link>
        </div>
        <div className='secondary-bottom'>
          <div className='newsletter'>
            <p>Newsletter</p>
            <MailchimpSubscribe
              url={postUrl}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                ></CustomForm>
              )}
            />
          </div>
          <div className='secondary-bottom-foot'>
            <p>&copy; {new Date().getFullYear()} Pacific</p>
            <Link to='/shipping'>Shipping</Link>
            <Link to='/privacy'>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isCartOpen && (
          <Cart toggleCart={() => setIsCartOpen(!isCartOpen)}></Cart>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
