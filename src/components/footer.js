import React from 'react'
import Logo from '../images/footerLogo.svg'


const Footer = () => {

  return (
    <footer>
      <div className='footer-logo-address'>
        <img src={Logo} alt='Pacific' className='footer-logo' />
        <a
          href='https://maps.app.goo.gl/tx9VpgZexeT4MMAB8'
          target='_blank'
          rel='noreferrer'
        >
          <p>70 Flushing Avenue,</p>
          <p>Brooklyn, NY, 11205, USA</p>
        </a>
      </div>
      <div className='bottom-footer'>
        <a
          href='https://www.instagram.com/pacific_pacific'
          target='_blank'
          rel='noreferrer'
        >
          <p className='footer-bottom-heading'>Instagram</p>
          <p>@pacific_pacific</p>
        </a>
        <a href='mailto:studio@pacificpacific.pub'>
          <p className='footer-bottom-heading'>
            Contact
          </p>
          <p>studio@pacificpacific.pub</p>
        </a>
      </div>
    </footer>
  )
}

export default Footer
