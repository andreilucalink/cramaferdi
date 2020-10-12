import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { SyncLoader, DotLoader } from 'react-spinners';
import Img from 'react-image';
import AOS from 'aos';

function ConfirmAgeModal(props) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1300,
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const acceptAgeReq = () => {
    sessionStorage.setItem('clientAge', 'valid');
    document.getElementById('ferdi-navbar').classList.remove('hide-nav');
    document.getElementById('home-page').classList.remove('hide-element');
    document.getElementById('ferdi-footer').classList.remove('hide-element');
    document.getElementById('confirmModal').classList.add('hide-confModal');
  };

  const denyAgeReq = () => {
    sessionStorage.setItem('clientAge', 'invalid');
    document.getElementById('modal-header').classList.add('red-header');
  };

  const [isLoading, setLoading] = useState(true);

  const override = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            `;

  return (
    <div className='hide-confModal' id='confirmModal'>
      {isLoading ? (
        <>
          <SyncLoader css={override} size={15} color={'#0f2027'} />
        </>
      ) : (
        <>
          <div className='modalBackground'></div>
          <div className='confirmModal'>
            <h2 id='modal-header'>
              Trebuie să aveţi împliniţi <b> 18 ani</b> pentru a accesa acest
              site
            </h2>
            <Img
              data-aos='zoom-in'
              className='modalLogo'
              src={require('../img/logo-ferdi.png')}
              loader={<Spinner animation='grow' className='modalLogoLoader' />}
            />
            <div className='confirmButtons'>
              <button className='ageConfirm' onClick={() => acceptAgeReq()}>
                Accept
              </button>
              <button className='ageDeny' onClick={() => denyAgeReq()}>
                Refuz
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ConfirmAgeModal;
