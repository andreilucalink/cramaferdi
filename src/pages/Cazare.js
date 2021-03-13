import React, { useEffect } from 'react';
import AOS from 'aos';
import '../css/cazare.css';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Img from 'react-image';
import { Link } from 'react-router-dom';

const Cazare = () => {
  useEffect(() => {
    window.scroll(0, 0);
    AOS.init({
      once: true,
      duration: 400,
    });
  });
  return (
    <div className='cazare-body'>
      <Helmet>
        <title>Crama Ferdi | Cazare</title>
      </Helmet>{' '}
      <div className='cazare-intro'>
        <h1
          data-aos='fade-up'
          data-aos-duration='700'
          data-aos-anchor='#start'
          data-aos-delay='250'>
          CAZARE
        </h1>
        <a href='#cazare' className='scroll-down'>
          <img src={require('../img/dwn-light.svg')} alt='Scroll Down' />
        </a>
        <div id='cazare'></div>
      </div>
      <Container className='cazare-details py-5'>
        <h2>Cazare pentru clienţii cramei</h2>
        <div className='cazare-card'>
          <div>
            <i className='fas fa-check-circle' aria-hidden='true'></i> Prin
            partenerii noştri <b>KIM Country Club</b>
          </div>
          <div>
            <i className='fas fa-check-circle' aria-hidden='true'></i> Discount
            10%
          </div>
          <div>
            <i className='fas fa-check-circle' aria-hidden='true'></i> Distanţă
            de 3km până la cramă
          </div>

          <div className='cazare-images'>
            <a
              className='cazare-image-container'
              href='https://kimcountryclub.ro'
              target='_blank'>
              <Img src='https://kimcountryclub.ro/wp-content/uploads/2018/10/facilitati-garaj-1024x683.jpg'></Img>
            </a>
            <div className='cazare-image-container'>
              <Img src='https://kimcountryclub.ro/wp-content/uploads/2017/08/galerie-piscina-2.jpg'></Img>
            </div>
            <div className='cazare-image-container'>
              <Img src='https://kimcountryclub.ro/wp-content/uploads/2018/10/locuri-in-natura-1024x683.jpg'></Img>
            </div>
          </div>
          <div className='cazare-images'>
            <div className='cazare-image-container'>
              <Img src='https://kimcountryclub.ro/wp-content/uploads/2018/10/lounge-1024x683.jpg'></Img>
            </div>
            <div className='cazare-image-container'>
              <Img src='https://kimcountryclub.ro/wp-content/uploads/2017/08/galerie-foto_0013_galerie-14.jpg'></Img>
            </div>
            <div className='cazare-image-container'>
              <Img src='https://kimcountryclub.ro/wp-content/uploads/2017/08/galerie-foto_0021_galerie-6.jpg'></Img>
            </div>
          </div>
          <a
            className='cazare-link'
            href='https://kimcountryclub.ro'
            target='_blank'>
            Detalii și rezervări
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Cazare;
