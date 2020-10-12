import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/products.css';
import AOS from 'aos';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import HashLoader from 'react-spinners/HashLoader';

function Products() {
  // Hooks
  useEffect(() => {
    window.scroll(0, 0);

    if (window.innerWidth > 965 && window.innerWidth < 1201) {
      document.getElementById('cuvee-unchiu-puiu').removeAttribute('data-aos');
      document.getElementById('lady-black').setAttribute('data-aos', 'zoom-in');
      document
        .getElementById('cuvee-francisc')
        .setAttribute('data-aos', 'zoom-in');
      document.getElementById('red-king').setAttribute('data-aos', 'zoom-in');
      document.getElementById('mister-s').setAttribute('data-aos', 'zoom-in');
      document
        .getElementById('mister-s-limited')
        .setAttribute('data-aos', 'zoom-in');
      document
        .getElementById('cuvee-paul-port')
        .setAttribute('data-aos', 'zoom-in');
    }

    AOS.init({
      once: true,
      duration: 1000,
    });

    const age = window.sessionStorage.getItem('clientAge');
    if (!age || age === 'invalid') {
      window.location.href = '/';
    }
  }, []);

  useEffect(() => {
    const displayStyle = window.sessionStorage.getItem('display');

    if (displayStyle === 'grid') {
      document.getElementById('grid-view').classList.add('hide-element');
      document.getElementById('list-view').classList.remove('hide-element');
      document
        .getElementById('products-display-list')
        .classList.add('hide-element');
      document
        .getElementById('products-display-grid')
        .classList.remove('hide-element');
    }

    if (displayStyle === 'list') {
      document
        .getElementById('products-display-list')
        .classList.remove('hide-element');
      document
        .getElementById('products-display-grid')
        .classList.add('hide-element');
    }
  }, []);

  useEffect(() => {
    const isWinesCached = sessionStorage.getItem('isWinesCached');
    if (isWinesCached === 'true') {
      setLoaded(true);
    } else {
      window.setTimeout(() => {
        setLoaded(true);
      }, 2000);
    }
    sessionStorage.setItem('isWinesCached', 'true');
  }, []);

  ///////////////////////////////////////

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
  ///////////////////////////////////////

  // Display stuff
  const displayAsGrid = () => {
    window.sessionStorage.setItem('display', 'grid');
    document.getElementById('grid-view').classList.add('hide-element');
    document.getElementById('list-view').classList.remove('hide-element');
    document
      .getElementById('products-display-list')
      .classList.add('hide-element');
    document
      .getElementById('products-display-grid')
      .classList.remove('hide-element');
  };

  const displayAsList = () => {
    window.sessionStorage.setItem('display', 'list');
    document.getElementById('list-view').classList.add('hide-element');
    document.getElementById('grid-view').classList.remove('hide-element');
    document
      .getElementById('products-display-list')
      .classList.remove('hide-element');
    document
      .getElementById('products-display-grid')
      .classList.add('hide-element');
  };
  ///////////////////////////////////////

  // Loading stuff
  const [isLoaded, setLoaded] = useState(false);
  const spinnerCSS = `
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%,-50%);
	  `;
  ///////////////////////////////////////

  return (
    <div id='wine-page-loader'>
      {!isLoaded && (
        <div className='loader-page'>
          <div className='hash-loader'>
            <HashLoader css={spinnerCSS} size={55} color={'#0F2027'} />
          </div>
        </div>
      )}
      <div className='products-page'>
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
              <div className='img' id='product4' />
              <div>
                <section>
                  <h3 className='wine-title'>Cuvée Unchiu Puiu</h3>
                  <span className='limit-edit-span'>
                    <b>
                      <i> 2018</i>
                    </b>
                  </span>
                  <div>
                    <ul className='desc-details-list'>
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
                        Maturare – 6 luni, baric din stejar românesc, american
                        şi francez
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
              data-aos='fade-left'
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
                        Tip Vin - Sec
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Soi – Shiraz
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Maturare – 14 luni, baric din stejar românesc, american
                        şi francez
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
              id='animation3'
              data-aos='fade-right'
              data-aos-offset='150'
            >
              <div className='img' id='product3' />
              <div>
                <section>
                  <h3 className='wine-title'>Lady Black</h3>
                  <span className='limit-edit-span'>
                    <b>
                      <i>Ediţie limitată - 2018</i>
                    </b>
                  </span>
                  <div>
                    <ul className='desc-details-list'>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Tip Vin - Sec
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Soi - Fetească Neagră
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Maturare – 14 luni, baric din stejar românesc, american
                        şi francez
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
                        Culoare – Roșu
                      </li>
                    </ul>
                  </div>
                </section>
                <Link to='/vinuri/lady-black' className='btn'>
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
              <div className='img' id='product5' />
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
                        Tip Vin - Sec
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Soi – Cabernet Franc și Merlot
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Maturare – 18 luni, baric din stejar românesc, american
                        şi francez
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
              <div className='img' id='product6' />
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
                        Tip Vin - Sec
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Soi – Cabernet Sauvignon
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Maturare – 22 luni, baric din stejar românesc, american
                        şi francez
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
              id='mister-s'
              data-aos='fade-left'
              data-aos-offset='150'
            >
              <div className='img' id='product7' />
              <div>
                <section>
                  <h3 className='wine-title'>Mister S.</h3>
                  <span className='limit-edit-span'>
                    <b>
                      <i>Rezerva 2017</i>
                    </b>
                  </span>
                  <div>
                    <ul className='desc-details-list'>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Tip Vin - Sec
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Soi – Shiraz
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Maturare – 20 luni, baric din stejar românesc, american
                        şi francez
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Volum - 0,75L
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Conţinut de alcool - 14,4%
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Culoare – Roşu
                      </li>
                    </ul>
                  </div>
                </section>
                <Link to='/vinuri/mister-s' className='btn'>
                  Detalii
                </Link>
              </div>
            </section>
          </div>
          <div className='card-cell'>
            <section
              className='card-info'
              id='cuvee-paul-port'
              data-aos='fade-right'
              data-aos-offset='150'
            >
              <div className='img' id='product8' />
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
                        Tip Vin - Demidulce
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Soi – Fetească Neagră şi Cabernet Sauvignon
                      </li>
                      <li>
                        <i className='fas fa-caret-right list-arrow'></i>
                        Maturare – 24 luni, baric din stejar românesc, american
                        şi francez
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
                <div className='grid-ladybk grid-img' />
              </div>
              <div className='grid-header'>
                Lady Black - Ediţie limitată 2018
              </div>
              <Link to='/vinuri/lady-black' className='grid-btn'>
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
                <div className='grid-misterS grid-img' />
              </div>
              <div className='grid-header'>Mister S. Rezerva 2017</div>
              <Link to='/vinuri/mister-s' className='grid-btn'>
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
    </div>
  );
}

export default Products;
