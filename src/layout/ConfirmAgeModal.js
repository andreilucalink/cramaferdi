import React, {useEffect} from "react";
import { Spinner } from "react-bootstrap";
import Img from "react-image";
import AOS from 'aos';

function ConfirmAgeModal(props) {
  useEffect(() => {
    AOS.init({
			once: true,
			duration: 1300
		});
  }, [])

  const acceptAgeReq = () => {
    sessionStorage.setItem("clientAge", "valid");
     document.getElementById('ferdi-navbar').classList.remove('hide-nav');
    document.getElementById("home-page").classList.remove("hide-element");
    document.getElementById("ferdi-footer").classList.remove("hide-element");
    document.getElementById("confirmModal").classList.add("hide-confModal");
  };

  const denyAgeReq = () => {
    sessionStorage.setItem("clientAge", "invalid");
    document.getElementById("modal-header").classList.add("red-header");
  };

  return (
    <div className="hide-confModal" id="confirmModal">
      <div className="modalBackground"></div>
      <div className="confirmModal">
        <h2 id="modal-header">
          Trebuie să aveţi împliniţi <b> 18 ani</b> pentru a accesa acest site
        </h2>
        <Img
          data-aos="zoom-in"
          className="modalLogo"
          src={require("../img/logo-ferdi.png")}
          loader={<Spinner animation="grow" className="modalLogoLoader" />}
        />
        <div className="confirmButtons">
          <button className="ageConfirm" onClick={() => acceptAgeReq()}>
            Accept
          </button>
          <button className="ageDeny" onClick={() => denyAgeReq()}>
            Refuz
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmAgeModal;
