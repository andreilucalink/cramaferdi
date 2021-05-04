import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/home_logo_intro.png';

function Page404() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='not-found'>
      <h1 style={{ color: '#0F2027' }}>Oops! </h1>
      <h2>
        Aţi accesat o cale inexistentă <br />
        în site
      </h2>
      <img className='logo-not-found' src={logo} alt='404' />
      <div className='buttons'>
        <Link to='/' className='btn-404 '>
          {' '}
          Acasa
        </Link>
        <Link to='/contact' className='btn-404 ml-5'>
          {' '}
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Page404;
