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
    <div className='single-product-container bg-cuvee-paul'>
      <div className='single-product-image'>
        <Img
          className='spimg'
          src={require('../../img/cp.png')}
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
        <h1>Cuvée Paul 2018</h1>
        <div className='wine-comp-desc'>
          <Img
            className='grape-comp'
            src={require('../../img/dkg.svg')}
            loader={<Spinner className='grape-spinner' animation='border' />}
          />
          <Img
            className='grape-comp'
            src={require('../../img/dkg.svg')}
            loader={<Spinner className='grape-spinner' animation='border' />}
          />
          <span id='grp'>{'(Fetească Neagră și Cabernet Sauvignon)'}</span>
        </div>

        <div className='text-desc'>
          Un cupaj format din Fetească Neagră și Cabernet Sauvignon. Prin
          alăturarea celor două soiuri s-a obținut un vin premium, cu un corp si
          o culoare bine conturate de Cabernet, iar gustul a fost desăvârșit de
          fructele de pădure si prunele deshidratate, specifice Feteștii Negre.
          Cele 16 luni petrecute în baric încununează cu succes calitatea
          acestui vin.
          <br />
            
          <ul className='swp-list'>
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
              Maturare – 16 luni, baric din stejar românesc
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
