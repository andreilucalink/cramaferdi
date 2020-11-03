import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

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
      style={{ overflow: 'hidden' }}
    >
      <Modal.Header>
        <Modal.Title>
          <h3>Confirmare vârstă</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={require('../../img/logo_black_simple.png')}
          alt='Crama Ferdi'
          style={{
            margin: 'auto',
            display: 'block',
            paddingTop: '30px',
            paddingBottom: '30px',
          }}
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
