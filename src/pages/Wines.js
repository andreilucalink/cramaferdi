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
          data-aos-delay='250'>
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
            link='/vinuri/rose-cosmina-editie-limitata'
            price='50 RON'
            img='sm_rose_cosmina_limited.png'
            title='Rosé Cosmina Ed. Lim.'
            year='2020'
          />
          <WineCard
            link='/vinuri/cuvee-alexandra-editie-limitata'
            price='55 RON'
            img='sm_cuvee_alexandra_limited.png'
            title='Cuvée Alexandra Ed. Lim.'
            year='2020'
          />
          <WineCard
            link='/vinuri/madame-s-editie-limitata'
            price='60 RON'
            img='sm_madame_s_limited.png'
            title='Madame S Ed. Lim.'
            year='2020'
          />
          <WineCard
            link='/vinuri/cuvee-francisc'
            price='100 RON'
            img='sm_cuveefrancisc2018_new.png'
            title='Cuvée Francisc'
            year='2018'
          />
        </Row>
        <Row>
          <WineCard
            link='/vinuri/redking-rezerva-2018'
            price='130 RON'
            img='sm_redkingrez2018.png'
            title='Red King Rezerva'
            year='2018'
          />
        </Row>
      </Container>
    </div>
  );
};

export default Wines;