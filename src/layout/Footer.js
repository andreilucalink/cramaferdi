import React from "react";
import "../css/layout.css";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="page-footer footer">
      <div className="footer-copyright text-center">
        <h4>&copy; Crama Ferdi</h4>
      </div>
      <div className="text-center footer-links">
        <Nav.Link className="footer-link" as={Link} eventKey="1" to="/">Acasa</Nav.Link>
        <Nav.Link className="footer-link" as={Link} eventKey="1" to="/vinuri">Vinuri</Nav.Link>
        <Nav.Link className="footer-link" as={Link} eventKey="1" to="/contact">Contact</Nav.Link>
      </div>
    </footer>
  );
}

export default Footer;
