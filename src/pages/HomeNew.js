import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Img from 'react-image';
import '../css/home2.css';

// Components
import EmblaCarousel from './pagesComponents/EmblaCarousel';
import ConfirmAgeModal from './pagesComponents/ConfirmAgeModal';

const HomeNew = () => {
  useEffect(() => {
    window.scroll(0, 0);

    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className='home-body'>
      <ConfirmAgeModal />
      <div className='home-intro'>
        <Img
          data-aos='zoom-in'
          data-aos-delay='500'
          src={require('../img/home_logo_intro.png')}
          alt='Crama Ferdi'
          className='home-logo'
        />
        <a href='#despre-crama' className='scroll-down'>
          <img src={require('../img/dwn.svg')} alt='Scroll Down' />
        </a>
      </div>
      <div className='home-section1'>
        <img
          src={require('../img/path_dark.svg')}
          className='path-img-dark'
          alt='path'
        ></img>
        <div id='despre-crama'></div>
        <div className='home-section-content1'>
          <div
            className='section1-header'
            data-aos='fade-right'
            data-aos-duration='700'
            data-aos-delay='200'
            dato-aos-offset='400'
          >
            <div>
              <span className='big-letter'>D</span>
              <span>ESPRE </span>
            </div>
            <div>
              <span className='big-letter'>C</span>
              <span>RAMĂ</span>
            </div>
          </div>
          <img
            src={require('../img/separator.svg')}
            alt=''
            className='separator'
          />
          <p>
            <strong>Crama Ferdi</strong> este o cramă de tip boutique – premium
            care oferă iubitorului de vin privilegiul de a degusta un vin lucrat
            exclusiv manual și în ediții foarte limitate. Sistemul de
            vinificație este unul de perspectivă îndelungată, având în vedere că
            vinurile roșii sunt maturate, de la 1 la 2 ani, în butoaie de stejar
            american, francez și românesc, reînnoite la fiecare 3 - 4 ani.
          </p>
          <img
            src={require('../img/overlap.png')}
            alt=''
            className='overlap1'
          />
        </div>
      </div>
      <div className='home-section2'>
        <div className='circle-icons'>
          <Link
            to='/vizite-si-degustari'
            data-aos='fade-right'
            data-aos-duration='700'
            data-aos-delay='200'
            id='_circle1'
          >
            <img
              src={require('../img/pinWH.svg')}
              alt=''
              className='icon-link'
            />
            <p>VIZITE</p>
          </Link>
          <Link
            to='/vinuri'
            data-aos='zoom-in'
            data-aos-duration='700'
            data-aos-delay='200'
            data-aos-anchor='#_circle1'
            id='_circle2'
          >
            <img src={require('../img/wineWH.svg')} alt='' />
            <p>VINURI</p>
          </Link>
          <Link
            to='/galerie'
            data-aos='fade-left'
            data-aos-duration='700'
            data-aos-delay='200'
            data-aos-anchor='#_circle2'
          >
            <img src={require('../img/galleryWH.svg')} alt='' />
            <p>GALERIE</p>
          </Link>
        </div>
        <img
          src={require('../img/path_light.svg')}
          className='path-img-light'
          alt=''
        ></img>
      </div>
      <div className='home-section3'>
        <div className='home-section-content3'>
          <div
            className='section3-header'
            data-aos='fade-right'
            data-aos-duration='700'
            data-aos-delay='200'
            data-aos-offset='200'
          >
            <div>
              <span className='big-letter'>L</span>
              <span>OCAŢIA </span>
            </div>
            <div>
              <span className='big-letter'>C</span>
              <span>RAMEI</span>
            </div>
          </div>
          <img
            src={require('../img/separator_dk.svg')}
            alt=''
            className='separator'
          />
          <p>
            Via se află în însorita regiune viticolă Dealu Mare, pe o suprafață
            de 3 hectare și are o vechime de 10 ani. Proprietarul cramei este și
            cel care face vinul, ghidându-se după deviza că vinul de calitate
            își are obârșia în vie, de unde începe și selecția strugurilor.
          </p>
          <iframe
            src='https://www.youtube.com/embed/Zs9tJ7_UaYU'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Video Prezentare'
          ></iframe>
        </div>
      </div>
      <div className='home-section4'>
        <div className='home-section-content4'>
          <img
            src={require('../img/path_blue.svg')}
            className='path-img-blue'
            alt=''
          ></img>
        </div>
      </div>
      <div className='home-section5'>
        <div className='home-section-content5'>
          <div
            className='section5-header'
            data-aos='fade-right'
            data-aos-duration='700'
            data-aos-delay='200'
            data-aos-offset='200'
          >
            <div>
              <span className='big-letter'>P</span>
              <span>RODUCŢIA </span>
            </div>
            <div>
              <span className='big-letter'>V</span>
              <span>INURILOR</span>
            </div>
          </div>
          <img
            src={require('../img/separator.svg')}
            alt=''
            className='separator'
          />
          <p>
            Crama produce vin din 10 soiuri de struguri, dintre care 7 roșii:
            Fetească Neagră, Cabernet Sauvignon, Cabernet Franc, Shiraz, Merlot,
            Burgund Mare, Pinot Noir și 3 albe: Sauvignon Blanc, Tămâioasa
            Românească și Riesling Italian, producția anuală totală fiind
            aproximativ de 10.000 de sticle. <br /> Vinurile Cramei Ferdi se
            disting prin naturalețe, consistență, aciditate și eleganță.
            Utilizarea metodei tradiționale de făcut vinul are ca rezultat o
            gamă de vinuri echilibrate și rafinate.
          </p>
          <div className='slider-wrapper'>
            <EmblaCarousel slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNew;
