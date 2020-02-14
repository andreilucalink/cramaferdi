import React from 'react';
import '../css/layout.css';

function SwitchLanguage(props) {
	const setRomanian = () => {
		localStorage.setItem('language', 'RO');
	};

	const setEnglish = () => {
		localStorage.setItem('language', 'EN');
	};

	return (
		<div className="switch-lg">
			<span>
				<a href={props.route} id="ro-lg" className="ro-lg" onClick={setRomanian}>
					<img src={require('../img/ro-lg.svg')} alt="" /> RO &nbsp;
				</a>
				|
				<a href={props.route} id="en-lg" className="en-lg" onClick={setEnglish}>
					&nbsp; <img src={require('../img/uk.svg')} alt="" /> EN &nbsp;
				</a>
			</span>
		</div>
	);
}

export default SwitchLanguage;
