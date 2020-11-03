import React, { useEffect } from 'react';
import AOS from 'aos';
import Img from 'react-image';
import DotLoader from 'react-spinners/DotLoader';
import '../css/visits.css';

// Components
import ConfirmAgeModal from './pagesComponents/ConfirmAgeModal';

function Visits() {
  // Hooks
  useEffect(() => {
    window.scroll(0, 0);
    AOS.init({
      once: true,
      duration: 1300,
    });
  }, []);

  let innerHeigth = window.innerHeight;
  function getHeigth() {
    if (document.getElementById('home-scroll-up') === null) return;
    if (window.scrollY > innerHeigth / 1.5)
      document
        .getElementById('home-scroll-up')
        .classList.add('show-home-sroll-btn');
    else
      document
        .getElementById('home-scroll-up')
        .classList.remove('show-home-sroll-btn');
  }
  window.addEventListener('scroll', getHeigth);

  return (
    <>
      <ConfirmAgeModal />
      <a role='button' href='#start' data-scroll>
        <img
          src={require('../img/up-ar.svg')}
          alt='Go Up'
          className='back-to-top-btn'
          id='home-scroll-up'
        />
      </a>
      <div className='programari-header'>
        <div className='programari-bg-wrapper'>
          <Img
            className='programari-bg'
            src={require('../img/poza_split.jpg')}
            loader={
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <DotLoader size='30' />
              </div>
            }
          />
          <div className='programari-text-bg'>
            <h1>Degustări şi vizite la cramă</h1>
          </div>
        </div>
        <h4 className='programari-descriere'>
          <span>
            Vă aşteptăm cu drag să ne vizitaţi şi să degustăm împreună vinurile
            cramei Ferdi în locul unde, în urmă cu 10 ani, a luat naştere
            pasiunea noastră pentru vin.
          </span>
          <br />
          <br />
          <span>
            Vizitele se fac organizat în aer liber, în grupuri de{' '}
            <strong>4-12</strong> persoane, în baza unei programări prealabile
            prin metodele de contact de mai jos.
          </span>
          <div className='programari-pachete-degustari'>
            <div className='pachete-header'>Pachete degustari</div>
            <div className='programari-line'></div>
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
                    <i className='fas fa-check-circle'></i>Timp alocat - 1 oră
                    şi 45 min
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
                    La achiziționarea a <b>12 sticle</b> de vin nu se mai
                    percepe taxă de degustare.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </h4>
      </div>
    </>
  );
}

export default Visits;
