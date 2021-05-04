import React, { useState, useEffect } from 'react';
import '../css/gallery.css';
import FsLightbox from 'fslightbox-react';
import AOS from 'aos';
import Img from 'react-image';
import { Helmet } from 'react-helmet';

// Components
import ConfirmAgeModal from './pagesComponents/ConfirmAgeModal';

const Gallery = () => {
  const images = [
    'vita2.jpg',
    'poza_vita.jpg',
    'ferdi.jpg',
    'bottle.jpg',
    'bottles.jpg',
    'sticle.jpg',
    'premii.jpg',
    'raft1.jpg',
    'butoaie.jpg',
    'struguri.jpg',
    'garaj.jpg',
  ];

  const sources = [
    require('../img/gallery/vita2.jpg'),
    require('../img/gallery/poza_vita.jpg'),
    require('../img/gallery/ferdi.jpg'),
    require('../img/gallery/bottle.jpg'),
    require('../img/gallery/bottles.jpg'),
    require('../img/gallery/sticle.jpg'),
    require('../img/gallery/premii.jpg'),
    require('../img/gallery/raft1.jpg'),
    require('../img/gallery/butoaie.jpg'),
    require('../img/gallery/struguri.jpg'),
    require('../img/gallery/garaj.jpg'),
  ];

  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true,
    });

    window.scroll(0, 0);
  }, []);

  return (
    <div id='gallery-page'>
      <Helmet>
        <title>Crama Ferdi | Galerie</title>
      </Helmet>
      <ConfirmAgeModal />
      <div className='gallery-page'>
        <div className='gallery-intro'>
          <h1
            data-aos='fade-up'
            data-aos-duration='700'
            data-aos-anchor='#start'
            data-aos-delay='250'>
            GALERIE
          </h1>
          <a href='#galerie' className='scroll-down'>
            <Img src={require('../img/dwn-light.svg')} alt='Scroll Down' />
          </a>
          <div id='galerie'></div>
        </div>
        <div className='gallery-body row'>
          <div className='col-xs-12 col-sm-6 col-md-6 col-lg-4 position1 img-wrapper'>
            <Img
              src={require(`../img/gallery/minified/${images[0]}`)}
              alt='1'
              className='gallery-img'
            />
            <div className='border-layer'>
              <div
                className='inside-layer'
                onClick={() => {
                  setOpen(!isOpen);
                  setCurrentIndex(1);
                }}>
                <Img
                  src={require('../img/fs.svg')}
                  alt='fullscreen'
                  className='fullscreen-btn'
                />
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-6 col-lg-8 position1 img-wrapper'>
            <Img
              src={require(`../img/gallery/minified/${images[1]}`)}
              alt='1'
              className='gallery-img'
            />
            <div className='border-layer'>
              <div
                className='inside-layer'
                onClick={() => {
                  setOpen(!isOpen);
                  setCurrentIndex(2);
                }}>
                <div className='right-panel'></div>
                <Img
                  src={require('../img/fs.svg')}
                  alt='fullscreen'
                  className='fullscreen-btn'
                />
              </div>
            </div>
          </div>
          <div className='row col-lg-8 md-12' style={{ margin: 0, padding: 0 }}>
            <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 position1 img-wrapper'>
              <Img
                src={require(`../img/gallery/minified/${images[2]}`)}
                alt='1'
                className='gallery-img'
              />
              <div className='border-layer'>
                <div
                  className='inside-layer'
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(3);
                  }}>
                  <Img
                    src={require('../img/fs.svg')}
                    alt='fullscreen'
                    className='fullscreen-btn'
                  />
                </div>
              </div>
            </div>

            <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 position1 img-wrapper'>
              <Img
                src={require(`../img/gallery/minified/${images[3]}`)}
                alt='1'
                className='gallery-img'
              />
              <div className='border-layer'>
                <div
                  className='inside-layer'
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(4);
                  }}>
                  <Img
                    src={require('../img/fs.svg')}
                    alt='fullscreen'
                    className='fullscreen-btn'
                  />
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 position1 img-wrapper'>
              <Img
                src={require(`../img/gallery/minified/${images[4]}`)}
                alt='1'
                className='gallery-img'
              />
              <div className='border-layer'>
                <div
                  className='inside-layer'
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(5);
                  }}>
                  <Img
                    src={require('../img/fs.svg')}
                    alt='fullscreen'
                    className='fullscreen-btn'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 position2 img-wrapper'>
            <Img
              src={require(`../img/gallery/minified/${images[5]}`)}
              alt='1'
              className='gallery-img'
            />
            <div className='border-layer'>
              <div
                className='inside-layer layer-high'
                onClick={() => {
                  setOpen(!isOpen);
                  setCurrentIndex(6);
                }}>
                <Img
                  src={require('../img/fs.svg')}
                  alt='fullscreen'
                  className='fullscreen-btn-high'
                />
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 position2 img-wrapper'>
            <Img
              src={require(`../img/gallery/minified/${images[6]}`)}
              alt='1'
              className='gallery-img'
            />
            <div className='border-layer'>
              <div
                className='inside-layer layer-high'
                onClick={() => {
                  setOpen(!isOpen);
                  setCurrentIndex(7);
                }}>
                <Img
                  src={require('../img/fs.svg')}
                  alt='fullscreen'
                  className='fullscreen-btn-high'
                />
              </div>
            </div>
          </div>
          <div className='row col-lg-8 md-12' style={{ margin: 0, padding: 0 }}>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 position1 img-wrapper'>
              <Img
                src={require(`../img/gallery/minified/${images[7]}`)}
                alt='1'
                className='gallery-img'
              />
              <div className='border-layer'>
                <div
                  className='inside-layer'
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(8);
                  }}>
                  <Img
                    src={require('../img/fs.svg')}
                    alt='fullscreen'
                    className='fullscreen-btn'
                  />
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 position1 img-wrapper'>
              <Img
                src={require(`../img/gallery/minified/${images[8]}`)}
                alt='1'
                className='gallery-img'
              />
              <div className='border-layer'>
                <div
                  className='inside-layer'
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(9);
                  }}>
                  <Img
                    src={require('../img/fs.svg')}
                    alt='fullscreen'
                    className='fullscreen-btn'
                  />
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 position1 img-wrapper'>
              <Img
                src={require(`../img/gallery/minified/${images[9]}`)}
                alt='1'
                className='gallery-img'
              />
              <div className='border-layer'>
                <div
                  className='inside-layer'
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(10);
                  }}>
                  <Img
                    src={require('../img/fs.svg')}
                    alt='fullscreen'
                    className='fullscreen-btn'
                  />
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 position1 img-wrapper'>
              <Img
                src={require(`../img/gallery/minified/${images[10]}`)}
                alt='1'
                className='gallery-img'
              />
              <div className='border-layer'>
                <div
                  className='inside-layer'
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(11);
                  }}>
                  <Img
                    src={require('../img/fs.svg')}
                    alt='fullscreen'
                    className='fullscreen-btn'
                  />
                </div>
              </div>
            </div>
          </div>
          <FsLightbox
            toggler={isOpen}
            sources={sources}
            type='image'
            slide={currentImageIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
