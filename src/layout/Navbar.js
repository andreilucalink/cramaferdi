import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/layout.css';
import { Link } from 'react-router-dom';

function NavigationBar() {
	const [open, setOpen] = useState();
	const scrollRestoration = () => {
		window.scrollTo(0, 0);
		document.getElementById('bar3').classList.remove('hidden');
		document.getElementById('bar2').classList.remove('rotate2');
		document.getElementById('bar1').classList.remove('rotate1');
		setOpen(false);
	};

	let home = 'Acasa';
	let products = 'Produse';
	if (window.localStorage.getItem('language') === 'EN') {
		home = 'Home';
		products = 'Products';
	}
	

	const rotateMenu = () => {
		if(!open){
			document.getElementById('bar3').classList.add('hidden');
			document.getElementById('bar2').classList.add('rotate2');
			document.getElementById('bar1').classList.add('rotate1');
			setOpen(true);
		} else {
			document.getElementById('bar3').classList.remove('hidden');
			document.getElementById('bar2').classList.remove('rotate2');
			document.getElementById('bar1').classList.remove('rotate1');
			setOpen(false);
		}
	}

	return (
		<Navbar expand="lg" bg="light" sticky="top" className="p-3 ferdi-navbar navbar-dark" collapseOnSelect>
			<Navbar.Brand href="" className="ml-2" onClick={scrollRestoration}>
				Crama Ferdi
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" id="ferdi-toggler" onClick={rotateMenu}>
				<div className="ferdi-bar" id="bar1" />
				<div className="ferdi-bar" id="bar2" />
				<div className="ferdi-bar" id="bar3" />
			</Navbar.Toggle>
			<Navbar.Collapse id="basic-navbar-nav" style={{ color: '#fff' }}>
				<Nav className="ml-auto p-1">
					<Nav.Link className="ml-1" as={Link} eventKey="0" to="/" onClick={scrollRestoration}>
						{home}
					</Nav.Link>
					<Nav.Link className="ml-1" as={Link} eventKey="1" to="/products" onClick={scrollRestoration}>
						{products}
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
