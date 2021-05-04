import React from 'react';
import '../css/layout.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isAndroid, isIOS, isMobile } from 'react-device-detect';
import facebook from '../img/facebook.svg';
import instagram from '../img/insta.svg';

function Footer() {
  let fbLink = 'https://www.facebook.com/cramaferdi';
  let igLink = 'https://www.instagram.com/crama_ferdi/';
  if (isMobile) {
    if (isAndroid) {
      fbLink = 'fb://page/492360557613539';
      igLink = 'instagram://user?username=crama_ferdi';
    }
    if (isIOS) {
      fbLink = 'fb://profile/492360557613539';
      igLink = 'instagram://user?username=crama_ferdi';
    }
  }

  return (
    <footer className='page-footer footer' id='ferdi-footer'>
      <div className='footer-copyright text-center'>
        <h4>&copy; Crama Ferdi</h4>
      </div>
      <div className='text-center footer-links'>
        <Nav.Link className='footer-link' as={Link} eventKey='1' to='/'>
          Acasa
        </Nav.Link>
        <Nav.Link className='footer-link' as={Link} eventKey='1' to='/vinuri'>
          Vinuri
        </Nav.Link>
        <Nav.Link className='footer-link' as={Link} eventKey='1' to='/contact'>
          Contact
        </Nav.Link>
      </div>
      <div className='social-media-btns'>
        <a
          href={fbLink}
          target='_blank'
          rel='noopener noreferrer'
          className='fb-logo'>
          <img src={facebook} alt='FB' />
        </a>
        <a
          href={igLink}
          target='_blank'
          rel='noopener noreferrer'
          className='ig-logo'>
          <img src={instagram} alt='FB' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
