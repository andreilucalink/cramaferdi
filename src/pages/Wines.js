import React, { useEffect, useRef } from 'react';
import '../css/wines.css';
import Img from 'react-image';
import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

// Components
import WineCard from './pagesComponents/WineCard';

// Images
import down from '../img/dwn-light.svg';
// import calx from '../img/wines/CALX2020.png';
import cunp from '../img/wines/CUNP2019_medal.jpg';
// import cosm from '../img/wines/RC2020.png';
// import ladyblk from '../img/wines/LBK2019_new.png';
import mrsr from '../img/wines/MRSR2018.png';
// import rkr from '../img/wines/RKR2018.png';
import blau from '../img/wines/BLAUB2018.jpg';
import whq from '../img/wines/WHQ2020_new.jpg';

const Wines = () => {
  const winesRef = useRef(null);
  useEffect(() => {
    if (window.location.hash === '') {
      window.scroll(0, 0);
    } else {
      window.scroll(0, winesRef.current.offsetTop + 75);
    }
  }, []);

  return (
    <div id='wines-page'>
      <Helmet>
        <title>Crama Ferdi | Vinuri</title>
      </Helmet>
      <div className='wines-intro'>
        <h1
          data-aos='fade-up'
          data-aos-duration='700'
          data-aos-anchor='#start'
          data-aos-delay='250'>
          VINURI
        </h1>
        <a href='#wines' className='scroll-down'>
          <Img src={down} alt='Scroll Down' />
        </a>
        <div id='wines' ref={winesRef}></div>
      </div>
      <Container className='wines-list'>
        <div className='wines-header'>
          <h2>Vinuri cu rădăcini în pasiune, curaj și dăruire.</h2>
          <p>
            Pentru a comanda vinuri sau pentru degustări şi vizite la cramă,
            contactaţi-ne la numerele de telefon sau adresa de e-mail din pagina
            de contact.
          </p>
        </div>
        <Row>
          <WineCard
            link='/vinuri/white-queen-2020'
            price='80 RON'
            img={whq}
            title='White Queen Ed. Limitată'
            year='2020'
          />
          <WineCard
            link='/vinuri/blau-burg-2018'
            price='105 RON'
            img={blau}
            title='Blau Burg Ed. Limitată'
            year='2018'
          />
          <WineCard
            link='/vinuri/cuvee-unchiu-puiu-2019'
            price='60 RON'
            img={cunp}
            title='Cuvée Unchiu Puiu'
            year='2019'
          />
          <WineCard
            link='/vinuri/mister-s-rezerva'
            price='130 RON'
            img={mrsr}
            title='Mister S Rezerva'
            year='2018'
          />
        </Row>
      </Container>
    </div>
  );
};

export default Wines;
