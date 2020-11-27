import React, { useEffect } from 'react';
import '../../css/winePage.css';
import Img from 'react-image';
import { Row, Col, ListGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WineLoader from '../pagesComponents/WineLoader';

const WinePage = ({
  title,
  year,
  price,
  description,
  type,
  maturing,
  alchool,
  color,
  qty,
  grapes,
  img,
  decantation,
}) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Container className='wine-page'>
      <h1 className='wine-header'>
        {title} {year}{' '}
      </h1>
      <Row md={12} xs={12}>
        <Col xl={6} md={6} xs={12}>
          <Img
            src={img}
            className='wine-image'
            loader={
              <div className='wine-loader-wraper'>
                <WineLoader />
              </div>
            }
          ></Img>
        </Col>
        <Col xl={6} md={6} xs={12}>
          <ListGroup variant='flush'>
            <ListGroup.Item className='wine-list-item'>
              <b>Descriere:</b> {description}
            </ListGroup.Item>
            <ListGroup.Item className='wine-list-item'>
              <b>Preţ:</b> {price}
            </ListGroup.Item>
            <ListGroup.Item className='wine-list-item'>
              <b>Volum:</b> {qty}
            </ListGroup.Item>
            <ListGroup.Item className='wine-list-item'>
              <b>Tip vin:</b> {type}
            </ListGroup.Item>
            <ListGroup.Item className='wine-list-item'>
              <b>Maturare:</b> {maturing}
            </ListGroup.Item>
            <ListGroup.Item className='wine-list-item'>
              <b>Conţinut de alcool:</b> {alchool}
            </ListGroup.Item>
            <ListGroup.Item className='wine-list-item'>
              <b>Culoare:</b> {color}
            </ListGroup.Item>
            <ListGroup.Item className='wine-list-item'>
              <b>Struguri:</b> {grapes}
            </ListGroup.Item>
            {decantation && (
              <ListGroup.Item className='wine-list-item'>
                <b>Recomandare decantare: </b>
                {decantation}
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
      <Row className='wine-buttons'>
        <Link to='/' className='wine-button-link'>
          Acasă
        </Link>
        <Link to='/vinuri#wines'>Vinuri</Link>
        <Link to='/contact'>Contact</Link>
      </Row>
    </Container>
  );
};

export default WinePage;
