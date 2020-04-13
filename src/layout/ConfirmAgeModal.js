import React from 'react';
import { Spinner } from 'react-bootstrap';
import Img from 'react-image';

function ConfirmAgeModal(props) {


    const acceptAgeReq = () => {
        window.removeEventListener('scroll', props.scrollListener);
        sessionStorage.setItem('clientAge', 'valid');
        document.getElementById("home-page").classList.remove('hide-home');
        document.getElementById("confirmModal").classList.add('hide-confModal');
        document.getElementById("home-body").classList.add('home-body');

    }
    
    const denyAgeReq = () => {
        sessionStorage.setItem('clientAge', 'invalid');
    }

    return (
        <div className="confirmModal hide-confModal" id="confirmModal">
			<h2>Trebuie să aveţi împliniţi <b>18 ani</b> pentru a accesa acest site</h2>
			{/* <img src={require('../img/lf.png')} alt="logo" className="modalLogo"/> */}
            <Img
					className="modalLogo"
					src={require('../img/lf.png')}
					loader={<Spinner animation="grow" className="modalLogoLoader" />}
			/>
			<div className="confirmButtons">
				<button className="ageConfirm" onClick={()=> acceptAgeReq()}>Accept</button>
				<button className="ageDeny" onClick={()=> denyAgeReq()}>Refuz</button>
			</div>
		</div>
    )
}

export default ConfirmAgeModal
