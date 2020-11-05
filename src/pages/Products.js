import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../css/products.css';

// Components
import ConfirmAgeModal from './pagesComponents/ConfirmAgeModal';

function Products() {
  // Hooks

  // remove animation for tablet
  // aos init
  // check if user clicked ok in modal - else redirect
  useEffect(() => {
    window.scroll(0, 0);

    if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
      document.getElementById('cuvee-unchiu-puiu').removeAttribute('data-aos');
      document.getElementById('mister-s-limited').removeAttribute('data-aos');
    }

    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  // check for display style
  useEffect(() => {
    window.sessionStorage.setItem('display', 'list');
    const displayStyle = window.sessionStorage.getItem('display');

    if (displayStyle === 'grid') {
      document.getElementById('grid-view').style.display = 'none';
      document.getElementById('list-view').style.display = 'block';
      document
        .getElementById('products-display-list')
        .classList.add('hide-element');
      document
        .getElementById('products-display-grid')
        .classList.remove('hide-element');
    }

    if (displayStyle === 'list') {
      document.getElementById('list-view').style.display = 'none';
      document.getElementById('grid-view').style.display = 'block';
      document
        .getElementById('products-display-list')
        .classList.remove('hide-element');
      document
        .getElementById('products-display-grid')
        .classList.add('hide-element');
    }

    if (window.innerWidth < 1280) {
      document.getElementById('grid-view').style.display = 'none';
      document.getElementById('list-view').style.display = 'none';
    }
  }, []);

  // Scroll stuff
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

  // Display functions
  const displayAsGrid = () => {
    window.sessionStorage.setItem('display', 'grid');
    document.getElementById('grid-view').style.display = 'none';
    document.getElementById('list-view').style.display = 'block';
    document
      .getElementById('products-display-list')
      .classList.add('hide-element');
    document
      .getElementById('products-display-grid')
      .classList.remove('hide-element');
  };

  const displayAsList = () => {
    window.sessionStorage.setItem('display', 'list');
    document.getElementById('list-view').style.display = 'none';
    document.getElementById('grid-view').style.display = 'block';
    document
      .getElementById('products-display-list')
      .classList.remove('hide-element');
    document
      .getElementById('products-display-grid')
      .classList.add('hide-element');
  };

  return (
    <div className='products-page'>
      <ConfirmAgeModal />
      <a role='button' href='#start' data-scroll>
        <img
          src={require('../img/up-ar.svg')}
          alt='Go Up'
          className='back-to-top-btn'
          id='home-scroll-up'
        />
      </a>

      <header className='main-header'>
        <h1>
          <span> Vinurile </span> Noastre
        </h1>
        <div className='products-header-line' />
        <p> Vinuri cu rădăcini in pasiune, curaj și dăruire.</p>
        <OverlayTrigger
          placement='right'
          delay={{ show: 250, hide: 0 }}
          overlay={<Tooltip>Grilă</Tooltip>}
        >
          <i
            className='fas fa-th fa-2x'
            id='grid-view'
            onClick={() => displayAsGrid()}
          ></i>
        </OverlayTrigger>
        <OverlayTrigger
          placement='right'
          delay={{ show: 250, hide: 0 }}
          overlay={<Tooltip>Listă</Tooltip>}
        >
          <i
            className='fas fa-stream fa-2x hide-element'
            id='list-view'
            onClick={() => displayAsList()}
          ></i>
        </OverlayTrigger>
      </header>
      <div className='products-container' id='products-display-list'>
        <div className='card-cell'>
          <section className='card-info' id='cuvee-unchiu-puiu'>
            <div className='img' id='cuvee_unchiu_image' />
            <div>
              <section>
                <h3 className='wine-title'>Cuvée Unchiu Puiu</h3>
                <span className='limit-edit-span'>
                  <b>
                    <i>2018</i>
                  </b>
                </span>
                <div>
                  <ul className='desc-details-list'>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Pret - 60 RON
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Tip Vin - Sec
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Soi – Merlot, Shiraz și Blaufränkisch
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Maturare – 6 luni, baric din stejar românesc, american şi
                      francez
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Conţinut de alcool - 14,5%
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Culoare – Roşu
                    </li>
                  </ul>
                </div>
              </section>
              <Link to='/vinuri/unchiu-puiu' className='btn'>
                Detalii
              </Link>
            </div>
          </section>
        </div>
        <div className='card-cell'>
          <section
            className='card-info'
            id='mister-s-limited'
            data-aos='fade-right'
            data-aos-offset='150'
          >
            <div className='img' id='misterS_image' />
            <div>
              <section>
                <h3 className='wine-title'>Mister S</h3>
                <span className='limit-edit-span'>
                  <b>
                    <i>Ediţie limitată - 2018</i>
                  </b>
                </span>
                <div>
                  <ul className='desc-details-list'>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Pret - 90 RON
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Tip Vin - Sec
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Soi – Shiraz
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Maturare – 14 luni, baric din stejar românesc, american şi
                      francez
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Conţinut de alcool - 14,7%
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Culoare – Roşu
                    </li>
                  </ul>
                </div>
              </section>
              <Link to='/vinuri/mister-s-editie-limitata' className='btn'>
                Detalii
              </Link>
            </div>
          </section>
        </div>
        <div className='card-cell'>
          <section
            className='card-info'
            id='cuvee-francisc'
            data-aos='fade-left'
            data-aos-offset='150'
          >
            <div className='img' id='cuvee_francisc_image' />
            <div>
              <section>
                <h3 className='wine-title'>Cuvée Francisc</h3>
                <span className='limit-edit-span'>
                  <b>
                    <i> 2017</i>
                  </b>
                </span>
                <div>
                  <ul className='desc-details-list'>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Pret - 100 RON
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Tip Vin - Sec
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Soi – Cabernet Franc și Merlot
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Maturare – 18 luni, baric din stejar românesc, american şi
                      francez
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Conţinut de alcool - 14,9%
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Culoare – Roşu
                    </li>
                  </ul>
                </div>
              </section>
              <Link to='/vinuri/cuvee-francisc' className='btn'>
                Detalii
              </Link>
            </div>
          </section>
        </div>
        <div className='card-cell'>
          <section
            className='card-info'
            id='red-king'
            data-aos='fade-right'
            data-aos-offset='150'
          >
            <div className='img' id='red_king_image' />
            <div>
              <section>
                <h3 className='wine-title'>Red King</h3>
                <span className='limit-edit-span'>
                  <b>
                    <i>Rezerva 2017</i>
                  </b>
                </span>
                <div>
                  <ul className='desc-details-list'>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Pret - 130 RON
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Tip Vin - Sec
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Soi – Cabernet Sauvignon
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Maturare – 22 luni, baric din stejar românesc, american şi
                      francez
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Conţinut de alcool - 14,5%
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Culoare – Roşu
                    </li>
                  </ul>
                </div>
              </section>
              <Link to='/vinuri/red-king' className='btn'>
                Detalii
              </Link>
            </div>
          </section>
        </div>
        <div className='card-cell'>
          <section
            className='card-info'
            id='cuvee-paul-port'
            data-aos='fade-left'
            data-aos-offset='150'
          >
            <div className='img' id='cuvee_paul_image' />
            <div>
              <section>
                <h3 className='wine-title'>Cuvée Paul Port </h3>
                <span className='limit-edit-span'>
                  <b>
                    <i>2016</i>
                  </b>
                </span>
                <div>
                  <ul className='desc-details-list'>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Pret - 90 RON
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Tip Vin - Demidulce
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Soi – Fetească Neagră şi Cabernet Sauvignon
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Maturare – 24 luni, baric din stejar românesc, american şi
                      francez
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Conţinut de alcool - 14,9%
                    </li>
                    <li>
                      <i className='fas fa-caret-right list-arrow'></i>
                      Culoare – Roşu
                    </li>
                  </ul>
                </div>
              </section>
              <Link to='/vinuri/cuvee-paul-port' className='btn'>
                Detalii
              </Link>
            </div>
          </section>
        </div>
      </div>
      <div className='hide-element' id='products-display-grid'>
        <div className='products-container-grid'>
          <div className='grid-card'>
            <div className='grid-layer'></div>
            <div className='grid-img-wrapper'>
              <div className='grid-unchiu grid-img' />
            </div>
            <div className='grid-header'>Cuveé Unchiu Puiu 2018</div>
            <Link to='/vinuri/unchiu-puiu' className='grid-btn'>
              Detalii
            </Link>
          </div>
          <div className='grid-card'>
            <div className='grid-layer'></div>
            <div className='grid-img-wrapper'>
              <div className='grid-misterS-limited grid-img' />
            </div>
            <div className='grid-header'>Mister S - Ediţie limitată 2018</div>
            <Link to='/vinuri/mister-s-editie-limitata' className='grid-btn'>
              Detalii
            </Link>
          </div>
          <div className='grid-card'>
            <div className='grid-layer'></div>
            <div className='grid-img-wrapper'>
              <div className='grid-francisc grid-img' />
            </div>
            <div className='grid-header'>Cuveé Francisc 2017</div>
            <Link to='/vinuri/cuvee-francisc' className='grid-btn'>
              Detalii
            </Link>
          </div>
          <div className='grid-card'>
            <div className='grid-layer'></div>
            <div className='grid-img-wrapper'>
              <div className='grid-redking grid-img' />
            </div>
            <div className='grid-header'>Red King Rezerva 2017</div>
            <Link to='/vinuri/red-king' className='grid-btn'>
              Detalii
            </Link>
          </div>
          <div className='grid-card'>
            <div className='grid-layer'></div>
            <div className='grid-img-wrapper'>
              <div className='grid-paul grid-img' />
            </div>
            <div className='grid-header'>Cuveé Paul Port 2016</div>
            <Link to='/vinuri/cuvee-paul-port' className='grid-btn'>
              Detalii
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
