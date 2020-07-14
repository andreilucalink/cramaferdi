import React, { useEffect } from "react";
import "../css/contact.css";
import AOS from "aos";
import Img from "react-image";
import { Spinner } from "react-bootstrap";
import HashLoader from "react-spinners/HashLoader";

function Contact() {
  const preventDefault = (e) => {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  };

  const preventScrollingSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari") != -1 && ua.indexOf("chrome") <= -1) {
      if (window.addEventListener) {
        window.addEventListener("DOMMouseScroll", preventDefault, false);
      }
      window.onwheel = preventDefault;
      window.onmousewheel = document.onmousewheel = preventDefault;
      window.ontouchmove = preventDefault;
    }
  };

  const enableScrollingSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari") != -1 && ua.indexOf("chrome") <= -1) {
      if (window.removeEventListener) {
        window.removeEventListener("DOMMouseScroll", preventDefault, false);
      }
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    AOS.init({
      once: true,
      duration: 1300,
    });

    if (window.innerWidth < 501) {
      document.getElementById("first-card").removeAttribute("data-aos-delay");
      document.getElementById("first-card").removeAttribute("data-aos");
    }

    const age = window.sessionStorage.getItem("clientAge");
    if (!age || age === "invalid") {
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    const isContactCached = sessionStorage.getItem("isContactCached");
    const body = document.getElementById("start");
    const loaderPage = document.getElementById("loader-page3");
    if (isContactCached === "true") {
      loaderPage.parentNode.removeChild(loaderPage);
    } else {
	  preventScrollingSafari();
      body.style.height = "100vh";
      body.style.overflow = "hidden";
      window.setTimeout(() => {
        enableScrollingSafari();
        body.style.height = "100%";
        body.style.overflow = "visible";
        loaderPage.parentNode.removeChild(loaderPage);
      }, 3500);
    }
    sessionStorage.setItem("isContactCached", "true");
  }, []);

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

  // Loading stuff
  const spinnerCSS = `
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%,-50%);
	  `;
  ///////////////////////////////////////

  return (
    <div>
      <div id="loader-page3" className="loader-page3 animation-3">
        <HashLoader css={spinnerCSS} size={55} color={"#f4f4f4"} />
      </div>
      <section id="contact-body" /* className="hidden" */>
        <a role="button" href="#start" data-scroll>
          <img
            src={require("../img/up-ar.svg")}
            alt="Go Up"
            className="back-to-top-btn"
            id="home-scroll-up"
          />
        </a>
        <header className="programari-header">
          <div className="programari-bg-wrapper">
            <Img
              className="programari-bg"
              src={require("../img/poza_split.jpg")}
            />
            <div className="programari-text-bg">
              <h1>Degustări şi vizite la cramă</h1>
            </div>
          </div>
          <h4 className="programari-descriere">
            <span>
              Vă aşteptăm cu drag să ne vizitaţi şi să degustăm împreună
              vinurile cramei Ferdi în locul unde, în urmă cu 10 ani, a luat
              naştere pasiunea noastră pentru vin.
            </span>
            <br />
            <br />
            <span>
              Vizitele se fac organizat, în grupuri de <strong>6-12</strong>{" "}
              persoane, în baza unei programări prealabile prin metodele de
              contact de mai jos.
            </span>
            <div className="programari-line"></div>
            <div className="contacte">
              <b>Contacte pentru programări şi comenzi:</b>
            </div>
          </h4>
        </header>
        {/* <header className="contact-header">
				<h1>
					<span>Echipa</span> Noastră
				</h1>
				<p>Pentru vizite şi comenzi ne puteţi contacta la numărul de telefon sau adresa de e-mail de mai jos</p>
			</header> */}
        <div className="contact-wrapper">
          <div
            className="contact-card"
            id="first-card"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="profile-bg" />
            <Img
              className="profile-img"
              src={require("../img/ferdi.jpg")}
              loader={
                <Spinner animation="grow" className="profile-img-loader" />
              }
            />
            <div className="contact-details">
              <h3>Fernando Mihăilescu</h3>
              <img
                src={require("../img/romania3.png")}
                alt="Country"
                className="country"
              />
              <div className="contact-bar ferdi-bar" />
              <div className="email ferdi-mail">
                <a
                  role="button"
                  href="mailto:test@gmail.com"
                  className="email-button"
                >
                  <img
                    className="email-img"
                    src={require("../img/gmail.svg")}
                    alt="Call"
                  />
                  <span>office@cramaferdi.ro</span>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="profile-bg" />
            <Img
              className="profile-img"
              src={require("../img/paul.jpg")}
              loader={
                <Spinner animation="grow" className="profile-img-loader" />
              }
            />
            <div className="contact-details">
              <h3>Paul Mihăilescu</h3>
              <img
                src={require("../img/romania3.png")}
                alt="Country"
                className="country"
              />
              <div className="contact-bar paul-bar" />
              <div className="phone">
                <a
                  role="button"
                  href="tel:+40-0729-884-940"
                  className="phone-button"
                >
                  <img
                    className="phone-img"
                    src={require("../img/call2.svg")}
                    alt="Call"
                  />
                  <span>0729-884-940 </span>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="profile-bg" />
            <Img
              className="profile-img"
              src={require("../img/ofelia.jpg")}
              loader={
                <Spinner animation="grow" className="profile-img-loader" />
              }
            />
            <div className="contact-details">
              <h3>Ofelia Marian</h3>
              <img
                src={require("../img/romania3.png")}
                alt="Country"
                className="country"
              />
              <div className="contact-bar paul-bar" />
              <div className="phone">
                <a
                  role="button"
                  href="tel:+40-0729-884-940"
                  className="phone-button"
                >
                  <img
                    className="phone-img"
                    src={require("../img/call2.svg")}
                    alt="Call"
                  />
                  <span>0723-768-322 </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
