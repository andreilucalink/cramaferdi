import React, { useEffect } from 'react';
import AOS from 'aos';
import '../css/club.css';
import { Helmet } from 'react-helmet';

// Components
import ConfirmAgeModal from './pagesComponents/ConfirmAgeModal';

// Images
import down from '../img/dwn-light.svg';
import step1 from '../img/step1.svg';
import step2 from '../img/step2.svg';
import step3 from '../img/step3.svg';
import step4 from '../img/step4.svg';
import logo from '../img/logo_black_simple.png';

const Club = () => {
  useEffect(() => {
    window.scroll(0, 0);
    AOS.init({
      once: true,
      duration: 400,
    });

    if (window.innerWidth < 650) {
      let steps = document.querySelectorAll('.club-step');
      steps.forEach((step) => step.setAttribute('data-aos-offset', -250));
    }
  }, []);
  return (
    <div className='club-body'>
      <Helmet>
        <title>Crama Ferdi | Club</title>
      </Helmet>
      <ConfirmAgeModal />
      <div className='club-intro'>
        <h1
          data-aos='fade-up'
          data-aos-duration='700'
          data-aos-anchor='#start'
          data-aos-delay='250'>
          CLUB CRAMA FERDI
        </h1>
        <a href='#pasi' className='scroll-down'>
          <img src={down} alt='Scroll Down' />
        </a>
        <div id='pasi'></div>
      </div>
      <div className='club-steps'>
        <img src={logo} alt='' />
        <h2>Pașii pe care trebuie să îi urmezi și ce beneficii primești:</h2>
        <div className='steps'>
          <p
            data-aos='fade-left'
            /* data-aos-offset='100' */ className='club-step'>
            <img src={step1} alt='1' />
            Alege 6 sticle de vin de pe site-ul nostru pe care ți le oferim cu
            un discount de 15% și... <b>EȘTI ÎNSCRIS!</b>
          </p>

          <p
            data-aos='fade-left'
            data-aos-delay='100'
            className='club-step'
            id='step2-anchor'>
            <img src={step2} alt='2' />
            Discountul de 15% se aplica ulterior la orice achiziție de minim 6
            sticle, că membru al clubului, la o cantitate minima de 30 de sticle
            achiziționate per an.
          </p>
          <p
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-anchor='#step2-anchor'
            className='club-step'
            id='step3-anchor'>
            <img src={step3} alt='3' />
            De asemenea, beneficiezi de 2 vizite la crama cu degustare. Daca
            vrei, poți să vii și însoțit de 4 prieteni, doar să te programezi în
            prealabil.
          </p>
          <p
            data-aos='fade-left'
            data-aos-delay='300'
            data-aos-anchor='#step2-anchor'>
            <img src={step4} alt='4' />
            Vei fi la curent cu toate lansările de vinuri și evenimentele
            noastre.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Club;
