import React, { useState, useEffect } from "react";
import "../css/gallery.css";
import FsLightbox from "fslightbox-react";
import HashLoader from "react-spinners/HashLoader";

const Gallery = () => {
  const images = [
    "vita2.jpg",
    "poza_vita.jpg",
    "ferdi.jpg",
    "bottle.jpg",
    "bottles.jpg",
    "sticle.jpg",
    "premii.jpg",
    "raft1.jpg",
    "butoaie.jpg",
    "struguri.jpg",
    "garaj.jpg",
  ];

  const sources = [
    require("../img/gallery/vita2.jpg"),
    require("../img/gallery/poza_vita.jpg"),
    require("../img/gallery/ferdi.jpg"),
    require("../img/gallery/bottle.jpg"),
    require("../img/gallery/bottles.jpg"),
    require("../img/gallery/sticle.jpg"),
    require("../img/gallery/premii.jpg"),
    require("../img/gallery/raft1.jpg"),
    require("../img/gallery/butoaie.jpg"),
    require("../img/gallery/struguri.jpg"),
    require("../img/gallery/garaj.jpg"),
  ];

  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const age = window.sessionStorage.getItem("clientAge");
    if (!age || age === "invalid") {
      window.location.href = "/";
    }
  }, []);
  
  useEffect(() => {
    const isGalleryCached = sessionStorage.getItem("isGalleryCached");
    const body = document.getElementById("start");
    if (isGalleryCached === "true") {
      setLoaded(true);
    } else {
      body.style.height = "100vh";
      body.style.overflow = 'hidden';
      window.setTimeout(() => {
        setLoaded(true);
        body.style.height = "100%";
        body.style.overflow = "visible";
        sessionStorage.setItem("isGalleryCached", "true");
      }, 3500);
    }
  }, []);

  // Loading stuff
  const [isLoaded, setLoaded] = useState(false);
  const spinnerCSS = `
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%,-50%);
    `;

  const showLoader = !isLoaded ? (
    <div id="loader-page1" className="loader-page1 animation-3">
      <HashLoader css={spinnerCSS} size={55} color={"#0F2027"} />
    </div>
  ) : null;
  ///////////////////////////////////////

  return (
    <div id="gallery-page">
      {showLoader}
      <div className="gallery-page">
        {/* <a role="button" href="#start" data-scroll>
          <img
            src={require("../img/up-ar.svg")}
            alt="Go Up"
            className="back-to-top-btn"
            id="home-scroll-up"
          />
      </a> */}
        <div className="gallery-header">
          <h1>Galerie</h1>
          <div className="gallery-header-line"></div>
        </div>
        <div className="gallery-body row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 position1 img-wrapper">
            <img
              src={require(`../img/gallery/minified/${images[0]}`)}
              alt="1"
              className="gallery-img"
            />
            <div className="border-layer">
              <div
                className="inside-layer"
                onClick={() => {
                  setOpen(!isOpen);
                  setCurrentIndex(1);
                }}
              >
                <img
                  src={require("../img/fs.svg")}
                  alt="fullscreen"
                  className="fullscreen-btn"
                />
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8 position1 img-wrapper">
            <img
              src={require(`../img/gallery/minified/${images[1]}`)}
              alt="1"
              className="gallery-img"
            />
            <div className="border-layer">
              <div
                className="inside-layer"
                onClick={() => {
                  setOpen(!isOpen);
                  setCurrentIndex(2);
                }}
              >
                <div className="right-panel"></div>
                <img
                  src={require("../img/fs.svg")}
                  alt="fullscreen"
                  className="fullscreen-btn"
                />
              </div>
            </div>
          </div>

          <div className="row col-lg-8 md-12" style={{ margin: 0, padding: 0 }}>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 position1 img-wrapper">
              <img
                src={require(`../img/gallery/minified/${images[2]}`)}
                alt="1"
                className="gallery-img"
              />
              <div className="border-layer">
                <div
                  className="inside-layer"
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(3);
                  }}
                >
                  <img
                    src={require("../img/fs.svg")}
                    alt="fullscreen"
                    className="fullscreen-btn"
                  />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 position1 img-wrapper">
              <img
                src={require(`../img/gallery/minified/${images[3]}`)}
                alt="1"
                className="gallery-img"
              />
              <div className="border-layer">
                <div
                  className="inside-layer"
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(4);
                  }}
                >
                  <img
                    src={require("../img/fs.svg")}
                    alt="fullscreen"
                    className="fullscreen-btn"
                  />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 position1 img-wrapper">
              <img
                src={require(`../img/gallery/minified/${images[4]}`)}
                alt="1"
                className="gallery-img"
              />
              <div className="border-layer">
                <div
                  className="inside-layer"
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(5);
                  }}
                >
                  <img
                    src={require("../img/fs.svg")}
                    alt="fullscreen"
                    className="fullscreen-btn"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 position2 img-wrapper">
            <img
              src={require(`../img/gallery/minified/${images[5]}`)}
              alt="1"
              className="gallery-img"
            />
            <div className="border-layer">
              <div
                className="inside-layer layer-high"
                onClick={() => {
                  setOpen(!isOpen);
                  setCurrentIndex(6);
                }}
              >
                <img
                  src={require("../img/fs.svg")}
                  alt="fullscreen"
                  className="fullscreen-btn-high"
                />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 position2 img-wrapper">
            <img
              src={require(`../img/gallery/minified/${images[6]}`)}
              alt="1"
              className="gallery-img"
            />
            <div className="border-layer">
              <div
                className="inside-layer layer-high"
                onClick={() => {
                  setOpen(!isOpen);
                  setCurrentIndex(7);
                }}
              >
                <img
                  src={require("../img/fs.svg")}
                  alt="fullscreen"
                  className="fullscreen-btn-high"
                />
              </div>
            </div>
          </div>
          <div className="row col-lg-8 md-12" style={{ margin: 0, padding: 0 }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 position1 img-wrapper">
              <img
                src={require(`../img/gallery/minified/${images[7]}`)}
                alt="1"
                className="gallery-img"
              />
              <div className="border-layer">
                <div
                  className="inside-layer"
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(8);
                  }}
                >
                  <img
                    src={require("../img/fs.svg")}
                    alt="fullscreen"
                    className="fullscreen-btn"
                  />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 position1 img-wrapper">
              <img
                src={require(`../img/gallery/minified/${images[8]}`)}
                alt="1"
                className="gallery-img"
              />
              <div className="border-layer">
                <div
                  className="inside-layer"
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(9);
                  }}
                >
                  <img
                    src={require("../img/fs.svg")}
                    alt="fullscreen"
                    className="fullscreen-btn"
                  />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 position1 img-wrapper">
              <img
                src={require(`../img/gallery/minified/${images[9]}`)}
                alt="1"
                className="gallery-img"
              />
              <div className="border-layer">
                <div
                  className="inside-layer"
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(10);
                  }}
                >
                  <img
                    src={require("../img/fs.svg")}
                    alt="fullscreen"
                    className="fullscreen-btn"
                  />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 position1 img-wrapper">
              <img
                src={require(`../img/gallery/minified/${images[10]}`)}
                alt="1"
                className="gallery-img"
              />
              <div className="border-layer">
                <div
                  className="inside-layer"
                  onClick={() => {
                    setOpen(!isOpen);
                    setCurrentIndex(11);
                  }}
                >
                  <img
                    src={require("../img/fs.svg")}
                    alt="fullscreen"
                    className="fullscreen-btn"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* lightbox */}
          <FsLightbox
            toggler={isOpen}
            sources={sources}
            type="image"
            slide={currentImageIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
