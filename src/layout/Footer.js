import React , {useState} from "react";
import "../css/layout.css";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {isAndroid, isIOS, isMobile} from 'react-device-detect';



function Footer() {
  const [facebookLink, setFacebookLink] = useState("https://www.facebook.com/cramaferdi");
  const [instagramLink, setInstagramLink] = useState("https://www.instagram.com/ferdi_winery/")

  if(isMobile){
    if (isAndroid) {
      setFacebookLink("fb://page/492360557613539");
      setInstagramLink("instagram://user?username=ferdi_winery");
    }
    if (isIOS) {
      setFacebookLink("fb://profile/492360557613539");
      setInstagramLink("instagram://user?username=ferdi_winery");
    }
  }


  
  return (
    <footer className="page-footer footer" id="ferdi-footer">
      <div className="footer-copyright text-center">
        <h4>&copy; Crama Ferdi</h4>
      </div>
      <div className="text-center footer-links">
        <Nav.Link className="footer-link" as={Link} eventKey="1" to="/">Acasa</Nav.Link>
        <Nav.Link className="footer-link" as={Link} eventKey="1" to="/vinuri">Vinuri</Nav.Link>
        <Nav.Link className="footer-link" as={Link} eventKey="1" to="/contact">Contact</Nav.Link>
      </div>
      <div className="social-media-btns">
        <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="fb-logo">
          <img src={require('../img/facebook.png')}  alt="FB"/>
        </a>
        <a href={instagramLink} target="_blank"  rel="noopener noreferrer" className="ig-logo">
        <img src={require('../img/instagram.png')}  alt="FB"/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
