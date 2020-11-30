import React, { useEffect, useRef } from 'react';
import '../css/wines.css';
import Img from 'react-image';
import { Container, Row } from 'react-bootstrap';
import WineCard from './pagesComponents/WineCard';

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
      <div className='wines-intro'>
        <h1
          data-aos='fade-up'
          data-aos-duration='700'
          data-aos-anchor='#start'
          data-aos-delay='250'
        >
          VINURI
        </h1>
        <a href='#wines' className='scroll-down'>
          <Img src={require('../img/dwn-light.svg')} alt='Scroll Down' />
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
            link='/vinuri/cuvee-unchiu-puiu'
            price='60 RON'
            img='sm_unchiupuiu.png'
            title='Cuvée Unchiu Puiu'
            year='2018'
          />
          <WineCard
            link='/vinuri/mister-s-editie-limitata'
            price='90 RON'
            img='sm_mister_s_limited.png'
            title='Mister S Ediţie Lim.'
            year='2018'
          />
          <WineCard
            link='/vinuri/cuvee-francisc'
            price='100 RON'
            img='sm_cuveefrancisc.png'
            title='Cuvee Francisc'
            year='2017'
          />

          <WineCard
            link='/vinuri/cuvee-paul'
            price='90 RON'
            img='sm_cuveepaul_new.png'
            title='Cuvée Paul'
            year='2018'
          />
        </Row>
        <Row>
          <WineCard
            link='/vinuri/mister-m-rezerva'
            price='120 RON'
            img='sm_mister_m_rezerva_new.png'
            title='Mister M Rezerva'
            year='2018'
          />
          <WineCard
            link='/vinuri/cuvee-paul-port'
            price='90 RON'
            img='sm_cuveepaulport.png'
            title='Cuvée Paul Port'
            year='2016'
          />
        </Row>
      </Container>
    </div>
  );
};

export default Wines;
