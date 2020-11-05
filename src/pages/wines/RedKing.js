import React, { useEffect } from 'react';
import '../../css/singleProduct.css';
import Img from 'react-image';
import { Spinner } from 'react-bootstrap';
import { DotLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const RedKing = () => {
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
    <div className='single-product-container bg-redking'>
      <div className='single-product-image'>
        <Img
          className='spimg'
          src={require('../../img/rkr.png')}
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
        <h1>Red King Rezerva 2017</h1>
        <div className='wine-comp-desc'>
          <Img
            className='grape-comp'
            src={require('../../img/dkg.svg')}
            loader={<Spinner className='grape-spinner' animation='border' />}
          />
        </div>
        <span id='grp'>{'(Cabernet Sauvignon)'}</span>

        <div className='text-desc'>
          Un Cabernet Sauvignon dominant, concentrat și cu un mare potențial de
          învechire. Un vin super-premium, corpolent, unde gustul de coacăze
          negre condimentate dau tonul și unde aciditatea atinge nivelul corect.
          Taninii bogați fac din acest Cabernet un partener perfect pentru
          carnea la grill și sosurile piperate. Cele 22 de luni petrecute la
          baric îi rotunjesc aroma într-o ciocolată neagră. Roșul regal este
          culoarea capișonului de ceară cu sigiliul cramei. Anul recoltei este
          2017 iar gradul alcoolic este 14.5%.
          <br />
          <b>
            <i>Recomandare decantare: minim 1h.</i>
          </b>
           
          <ul className='swp-list'>
            <li>
              <i className='fas fa-caret-right list-arrow'></i>
              Pret - 130 RON
            </li>
            <li>
              <i className='fas fa-caret-right list-arrow'></i>
              Tip Vin - Sec
            </li>
            <li>
              <i className='fas fa-caret-right list-arrow'></i>
              Maturare – 22 luni, baric din stejar românesc
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

export default RedKing;
