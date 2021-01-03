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
            link='/vinuri/cuvee-ferdi-editie-unica'
            price='190 RON'
            img='sm_cuvee_ferdi_unique_new.png'
            title='Cuvée Ferdi Ed. Unică'
            year='2018'
          />
          <WineCard
            link='/vinuri/rose-cosmina-editie-limitata'
            price='50 RON'
            img='sm_rose_cosmina_limited_new.png'
            title='Rosé Cosmina Ed. Lim.'
            year='2020'
          />
          <WineCard
            link='/vinuri/cuvee-alexandra-editie-limitata'
            price='55 RON'
            img='sm_cuvee_alexandra_limited_new.png'
            title='Cuvée Alexandra Ed. Lim.'
            year='2020'
          />
          <WineCard
            link='/vinuri/madame-s-editie-limitata'
            price='60 RON'
            img='sm_madame_s_limited_new.png'
            title='Madame S Ed. Lim.'
            year='2020'
          />
        </Row>
        <Row>
          <WineCard
            link='/vinuri/cuvee-unchiu-puiu'
            price='60 RON'
            img='sm_unchiupuiu.png'
            title='Cuvée Unchiu Puiu'
            year='2018'
          />
          <WineCard
            link='/vinuri/cuvee-paul'
            price='90 RON'
            img='sm_cuveepaul_new.png'
            title='Cuvée Paul'
            year='2018'
          />
          <WineCard
            link='/vinuri/redking-rezerva-2018'
            price='130 RON'
            img='sm_redkingrez2018.png'
            title='Red King Rezerva'
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
