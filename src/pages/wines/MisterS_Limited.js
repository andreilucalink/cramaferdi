import React, { useEffect } from 'react';
import '../../css/singleProduct.css';
import Img from 'react-image';
import { Spinner } from 'react-bootstrap';
import { DotLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const MisterS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const age = window.sessionStorage.getItem('clientAge');
    if (!age || age === 'invalid') {
      window.location.href = '/';
    }
  }, []);

  const override = `
            position: absolute;
            top: 30%;
            left: 40%;
            height: 200px;
            width: 200px;
            `;
  return (
    <div className='single-product-container bg-misterS-limited'>
      <div className='single-product-image'>
        <Img
          className='spimg'
          src={require('../../img/ms_limited.png')}
          loader={
            <DotLoader
              css={override}
              className='product-spinner'
              size={200}
              color={'#0f2027'}
            />
          }
        />
      </div>
      <div className='single-product-desc'>
        <h1>Mister S - Ediţie limitată 2018</h1>
        <div className='wine-comp-desc'>
          <Img
            className='grape-comp'
            src={require('../../img/dkg.svg')}
            loader={<Spinner className='grape-spinner' animation='border' />}
          />
          <span id='grp'>{'(Shiraz)'}</span>
        </div>

        <div className='text-desc'>
          Noul Shiraz al Cramei Ferdi, lucrat cu multă grijă și atenție la
          detalii, dezvăluie un vin românesc cu mult caracter, corp și eleganță.
          Maturat in butoaie de stejar timp de 14 luni, vinul a căpătat arome de
          vanilie si condimente, cu aciditate revigorantă si taninuri care se
          imbină frumos. Shiraz este considerat a fi unul dintre cele mai
          sănătoase vinuri, datorită dozei mai mari de antioxidanți. 
          <br />
          <b>
            <i>Recomandare decantare: minim 1h.</i>
          </b>
            
          <ul className='swp-list'>
            <li>
              <i className='fas fa-caret-right list-arrow'></i>
              Tip Vin - Sec
            </li>
            <li>
              <i className='fas fa-caret-right list-arrow'></i>
              Maturare – 14 luni, baric din stejar românesc
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
        <div className='desc-buttons'>
          <Link to='/vinuri' className='desc-btn desc-btn-left'>
            Vinuri
          </Link>
          <Link to='/' className='desc-btn btn-desc-right'>
            Acasă
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MisterS;
