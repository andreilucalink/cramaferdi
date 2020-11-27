import React, { useEffect } from 'react';
import AOS from 'aos';
import '../css/visits2.css';
import Img from 'react-image';

// Components
import ConfirmAgeModal from './pagesComponents/ConfirmAgeModal';
import { Container } from 'react-bootstrap';

const VisitsNew = () => {
  useEffect(() => {
    window.scroll(0, 0);
    AOS.init({
      once: true,
      duration: 400,
    });
  });

  return (
    <div className='visits-body'>
      <ConfirmAgeModal />
      <div className='visits-intro'>
        <h1
          data-aos='fade-up'
          data-aos-duration='700'
          data-aos-anchor='#start'
          data-aos-delay='250'
        >
          VIZITE ŞI DEGUSTĂRI
        </h1>
        <a href='#visits' className='scroll-down'>
          <Img src={require('../img/dwn-light.svg')} alt='Scroll Down' />
        </a>
        <div id='visits'></div>
      </div>
      <div className='programari-pachete-degustari'>
        <Container className='visits-header'>
          <h2>Pachete de degustări şi regulament pentru vizite </h2>
          <p className='visits-description-p'>
            Vă aşteptăm cu drag să ne vizitaţi şi să degustăm împreună vinurile
            cramei Ferdi în locul unde, în urmă cu 10 ani, a luat naştere
            pasiunea noastră pentru vin.
          </p>
          <p>
            Vizitele se fac organizat în aer liber, în grupuri de <b>4-12</b>{' '}
            persoane, în baza unei programări prealabile realizate la numerele
            de telefon sau la adresa de e-mail din pagina de contact.
          </p>
        </Container>
        <div className='pachete-cards'>
          <div className='pachet-light'>
            <h3>STANDARD</h3>
            <ul>
              <li>
                <i className='fas fa-check-circle'></i>Tur al cramei
              </li>
              <li>
                <i className='fas fa-check-circle'></i>Degustare 5 vinuri
              </li>
              <li>
                <i className='fas fa-check-circle'></i>Timp alocat - 1 oră
              </li>
              <li>
                <i className='fas fa-check-circle'></i>Apă şi grisine
              </li>
              <li className='pachet-price'>
                <h3>
                  <p>&nbsp;&nbsp;50 RON/Persoana</p>
                  <p>- 10 EURO -</p>
                </h3>
              </li>
              <li className='pachet-tax'>
                La achiziționarea a <b>6 sticle</b> de vin nu se mai percepe
                taxă de degustare.
              </li>
            </ul>
          </div>
          <div className='pachet-dark'>
            <h3>PREMIUM</h3>
            <ul>
              <li>
                <i className='fas fa-check-circle'></i>Tur al cramei
              </li>
              <li>
                <i className='fas fa-check-circle'></i>Degustare 7 vinuri
              </li>
              <li>
                <i className='fas fa-check-circle'></i>Timp alocat - 1 oră şi 45
                min
              </li>
              <li>
                <i className='fas fa-check-circle'></i>Platou ham & cheese
              </li>

              <li>
                <i className='fas fa-check-circle'></i>Apă şi grisine
              </li>
              <li className='pachet-price'>
                <h3>
                  <p>&nbsp;100 RON/Persoana</p>
                  <p>- 20 EURO -</p>
                </h3>
              </li>
              <li className='pachet-tax'>
                La achiziționarea a <b>12 sticle</b> de vin nu se mai percepe
                taxă de degustare.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitsNew;
