import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
	return (
		<div className="not-found">
			<h1 style={{color: '#0F2027'}}>Oops! </h1>
			<h2>Aţi accesat o cale inexistentă <br/>în site</h2>
			<div className="logo" />
			<div className="buttons">
				<Link to="/" className="btn-404">
					{' '}
					Acasa
				</Link>
				<Link to="/contact" className="btn-404 ml-4">
					{' '}
					Contact
				</Link>
			</div>
		</div>
	);
}

export default Page404;
