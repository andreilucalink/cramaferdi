import React, { useEffect } from 'react';
import '../../css/winePage.css';
import Img from 'react-image';
import { Row, Col, ListGroup, Container, Modal, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WineLoader from '../pagesComponents/WineLoader';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

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
  modalImage,
  medalImg,
  medal,
}) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <Container className='wine-page'>
      <Helmet>
        <title>{`Crama Ferdi | ${title}`}</title>
      </Helmet>
      {modalImage && (
        <Modal show={open} centered size='lg' onHide={() => setOpen(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ textAlign: 'center', width: '100%' }}>
              {title} {year}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image
              src={modalImage}
              alt='Eticheta'
              fluid
              className='modal-image'></Image>
          </Modal.Body>
        </Modal>
      )}
      <h1 className='wine-header'>
        {title} {year}
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
            }></Img>
        </Col>
        <Col xl={6} md={6} xs={12}>
          <ListGroup variant='flush wine-listgroup'>
            <ListGroup.Item className='wine-list-item'>
              <b>Descriere:</b> {description}
            </ListGroup.Item>
            {medal && (
              <ListGroup.Item className='wine-list-item'>
                <b>Medalie:</b> {medal}{' '}
                <Img src={medalImg} className='medal-image'></Img>
              </ListGroup.Item>
            )}
            <ListGroup.Item className='wine-list-item'>
              <b>Preţ:</b> {price}
            </ListGroup.Item>
            <ListGroup.Item className='wine-list-item'>
              <b>Volum:</b> {qty}
            </ListGroup.Item>
            <ListGroup.Item className='wine-list-item'>
              <b>Tip vin:</b> {type}
            </ListGroup.Item>
            {maturing && (
              <ListGroup.Item className='wine-list-item'>
                <b>Maturare:</b> {maturing}
              </ListGroup.Item>
            )}
            <ListGroup.Item className='wine-list-item'>
              <b>Conţinut de alcool:</b> {alchool}
            </ListGroup.Item>
            <ListGroup.Item className='wine-list-item'>
              <b>Culoare:</b> {color}
            </ListGroup.Item>
            {grapes && (
              <ListGroup.Item className='wine-list-item'>
                <b>Struguri:</b> {grapes}
              </ListGroup.Item>
            )}
            {decantation && (
              <ListGroup.Item className='wine-list-item'>
                <b>Recomandare decantare: </b>
                {decantation}
              </ListGroup.Item>
            )}
            {modalImage && (
              <ListGroup.Item className='wine-list-item'>
                <div
                  onClick={() => setOpen(true)}
                  variant='dark'
                  className='my-2 buton-eticheta'
                  size={'lg'}
                  style={{ display: 'inline-block' }}>
                  Vezi Eticheta
                </div>
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
