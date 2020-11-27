import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Img from 'react-image';
import WineLoader from '../pagesComponents/WineLoader';

const WineCard = ({ img, link, year, title, price }) => {
  return (
    <Col className='wine-card' lg={3} md={6} xs={12}>
      <Col className='wine-description' md={12}>
        <Img
          src={require(`../../img/wines/${img}`)}
          loader={
            <div className='loader-wrapper'>
              {' '}
              <WineLoader />
            </div>
          }
        />
        <div className='wine-info'>
          <p>{price}</p>
          <h5>
            {title} {year}
          </h5>
          <Link className='wine-details-btn' to={link}>
            DETALII
          </Link>
        </div>
      </Col>
    </Col>
  );
};

export default WineCard;
