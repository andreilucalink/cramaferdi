import React from 'react'

function ConfirmAgeModal(props) {


    const acceptAgeReq = () => {
        debugger;
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
			<img src={require('../img/lf.png')} alt="logo" className="modalLogo"/>
			<div className="confirmButtons">
				<button className="ageConfirm" onClick={()=> acceptAgeReq()}>Accept</button>
				<button className="ageDeny" onClick={()=> denyAgeReq()}>Refuz</button>
			</div>
		</div>
    )
}

export default ConfirmAgeModal
