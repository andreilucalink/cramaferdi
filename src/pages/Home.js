import React, { useEffect, useState } from "react";
import AOS from "aos";
import Img from "react-image";
import { Spinner, Modal } from "react-bootstrap";
import "../css/home.css";
import HashLoader from "react-spinners/HashLoader";

function Home() {
  //Hooks
  useEffect(() => {
    window.scroll(0, 0);

    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const age = sessionStorage.getItem("clientAge", "invalid");
    if (!age || age === "invalid") {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    const isHomeCached = sessionStorage.getItem("isHomeCached");
    if (isHomeCached === "true") {
      setLoaded(true);
    } else {
      window.setTimeout(() => {
        setLoaded(true);
        sessionStorage.setItem("isHomeCached", "true");
      }, 2500);
    }
  }, []);
  ////////////////////////////////////////

  // Loading stuff
  const [isLoaded, setLoaded] = useState(false);
  const spinnerCSS = `
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%,-50%);
    `;

  let showLoader = !isLoaded ? (
    <div className="loader-page">
      <div className="hash-loader">
            <HashLoader css={spinnerCSS} size={55} color={"#0F2027"} />
      </div>
    </div>
  ) : null;
  ///////////////////////////////////////

  // Trigger scroll-up button
  let innerHeigth = window.innerHeight;
  function getHeigth() {
    if (document.getElementById("home-scroll-up") === null) return;
    if (window.scrollY > innerHeigth / 1.5)
      document
        .getElementById("home-scroll-up")
        .classList.add("show-home-sroll-btn");
    else
      document
        .getElementById("home-scroll-up")
        .classList.remove("show-home-sroll-btn");
  }
  window.addEventListener("scroll", getHeigth);
  ////////////////////////////////////////

  // Modal stuff
  const [show, setShow] = useState(false);
  const closeModal = () => {
    sessionStorage.setItem("clientAge", "valid");
    setShow(false);
  };

  return (
    <div id="home-page-loader">
      {showLoader}
      <div className="home-body" id="home-body">
        <Modal
          show={show}
          backdrop="static"
          keyboard={false}
          centered
          size="md"
          /* scrollable={false} */ style={{
            overflow: "hidden",
            maxHeight: "90vh",
          }}
        >
          <Modal.Header className="ferdi-modal-header">
            <Modal.Title>
              <h2 className="ferdi-modal-header-text">
                Trebuie să aveţi împliniţi{" "}
                <b style={{ color: "indianred" }}> 18 ani</b> pentru a accesa
                acest site
              </h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="ferdi-modal-body">
            <Img
              data-aos="zoom-in"
              className="ferdi-modal-logo"
              src={require("../img/logo-ferdi.png")}
              loader={
                <Spinner animation="grow" className="ferdi-modal-logo-loader" />
              }
            />
          </Modal.Body>
          <Modal.Footer className="ferdi-modal-footer">
            <div className="modal-line"></div>
            <button className="ferdi-accept-btn" onClick={closeModal}>
              Accept
            </button>
          </Modal.Footer>
        </Modal>

        <a role="button" href="#start" data-scroll>
          <img
            src={require("../img/up-ar.svg")}
            alt="Go Up"
            className="back-to-top-btn"
            id="home-scroll-up"
          />
        </a>

        <main id="home-page">
          {/* <div className="pimg1">
            <Img
              className="ferdi-center-logo"
              id="home-logo"
              src={require("../img/logo-ferdi.png")}
              loader={<Spinner animation="grow" className="ferdi-center-logo logo-loader"/>}
            />
          </div> */}
          <div className="video-bg">
            <iframe
              title="Crama Ferdi Video"
              src="https://www.youtube.com/embed/Zs9tJ7_UaYU?autoplay=1&mute=1&controls=0&loop=1&playlist=Zs9tJ7_UaYU"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div className="video-overlay"></div>
          </div>

          <section className="section section-light">
            <div className="section-text1" data-aos="fade-up">
              <h2>Despre cramă</h2>
              {/* <div className="productionLogos">
                <img src={require("../img/glass.svg")} alt="wine" />
              </div> */}
              <p>
                <b>Crama Ferdi</b> este o cramă de tip boutique – premium care
                oferă iubitorului de vin privilegiul de a degusta un vin lucrat
                exclusiv manual și în ediții foarte limitate. Sistemul de
                vinificație este unul de perspectivă îndelungată, având în
                vedere că vinurile roșii sunt maturate, de la 1 la 2 ani, în
                butoaie de stejar american, francez și românesc, reînnoite la
                fiecare 3 - 4 ani.
              </p>
            </div>
          </section>
          <div className="pimg2"></div>
          <section className="section section-light" id="trigger-home-scroll">
            <div className="section-text2" data-aos="fade-up">
              <h2>Locaţie</h2>
              {/* <div className="productionLogos">
                <img src={require("../img/map.svg")} alt="wine" />
              </div> */}
              <p>
                Via se află în însorita regiune viticolă Dealu Mare, pe o
                suprafață de 3 hectare și are o vechime de 10 ani. Proprietarul
                cramei este și cel care face vinul, ghidându-se după deviza că
                vinul de calitate își are obârșia în vie, de unde începe și
                selecția strugurilor.
              </p>
            </div>
          </section>
          <div className="pimg3"></div>
          <section className="section section-light">
            <div className="section-text3" data-aos="fade-up">
              <h2>Producţie</h2>
              {/* <div className="productionLogos">
                <img src={require("../img/cork.svg")} alt="wine" />
                <img src={require("../img/wine.svg")} alt="wine" />
                <img src={require("../img/barrel.svg")} alt="wine" />
              </div> */}
              <p>
                Crama produce vin din 10 soiuri de struguri, dintre care 7
                roșii: Fetească Neagră, Cabernet Sauvignon, Cabernet Franc,
                Shiraz, Merlot, Burgund Mare, Pinot Noir și 3 albe: Sauvignon
                Blanc, Tămâioasa Românească și Riesling Italian, producția
                anuală totală fiind aproximativ de 10.000 de sticle.
                <br />
                <br />
                Vinurile Cramei Ferdi se disting prin naturalețe, consistență,
                aciditate și eleganță. Utilizarea metodei tradiționale de făcut
                vinul are ca rezultat o gamă de vinuri echilibrate și rafinate.
              </p>
            </div>
          </section>
          <div className="pimg4"></div>
        </main>
      </div>
    </div>
  );
}

export default Home;
