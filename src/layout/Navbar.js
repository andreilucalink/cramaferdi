import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/layout.css';
import { Link } from 'react-router-dom';

function NavigationBar() {
	const scrollRestoration = () => {
		window.scrollTo(0, 0);
	};

	return (
		<Navbar expand="lg" bg="light" sticky="top" className="p-3 ferdi-navbar navbar-dark" collapseOnSelect>
			<Navbar.Brand href="" className="ml-2" onClick={scrollRestoration}>
				Crama Ferdi
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" className="ferdi-toggler" />
			<Navbar.Collapse id="basic-navbar-nav" style={{ color: '#fff' }}>
				<Nav className="ml-auto p-1">
					<Nav.Link className="ml-1" as={Link} eventKey="0" to="/" onClick={scrollRestoration}>
						Acasa
					</Nav.Link>
					<Nav.Link className="ml-1" as={Link} eventKey="1" to="/products" onClick={scrollRestoration}>
						Produse
					</Nav.Link>
					<Nav.Link
						style={{ WebkitBackfaceVisibility: 'hidden' }}
						className="ml-1"
						as={Link}
						eventKey="2"
						to="/contact"
						onClick={scrollRestoration}
					>
						Contact
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavigationBar;
