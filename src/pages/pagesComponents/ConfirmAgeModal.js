import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Img from 'react-image';
import { DotLoader } from 'react-spinners';

// Images
import logo from '../../img/logo_black_simple.png';

const ConfirmAgeModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    sessionStorage.setItem('clientAge', 'valid');
    setShow(false);
  };

  useEffect(() => {
    const age = sessionStorage.getItem('clientAge');
    if (age === 'invalid' || !age) {
      setShow(true);
    }
  }, []);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop='static'
      keyboard={false}
      centered
      style={{ overflow: 'hidden' }}>
      <Modal.Header>
        <Modal.Title>
          <h3>Confirmare vârstă</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Img
          src={logo}
          alt='Crama Ferdi'
          style={{
            margin: 'auto',
            display: 'block',
            paddingTop: '30px',
            paddingBottom: '30px',
          }}
          loader={
            <div
              style={{
                margin: 'auto',
                display: 'block',
                paddingTop: '30px',
                paddingBottom: '30px',
                width: '180px',
                height: '200px',
                background: 'transparent',
                position: 'relative',
              }}>
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%,-50%)',
                }}>
                <DotLoader size={40} />
              </div>
            </div>
          }
        />
        <h5 style={{ textAlign: 'center' }}>
          Trebuie să aveţi împliniţi <b> 18 ani</b> pentru a accesa acest site
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='success' onClick={handleClose}>
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmAgeModal;
