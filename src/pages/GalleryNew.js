import React, { useEffect, useState } from "react";
import "../css/gallerynew.css";
import AOS from "aos";
import Img from "react-image";
import { Helmet } from "react-helmet";

// Components
import ConfirmAgeModal from "./pagesComponents/ConfirmAgeModal";
import { Container } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";

// Images
import down from "../img/dwn-light.svg";

import bottle from "../img/gallery/bottle.jpg";
import butoaie from "../img/gallery/butoaie.jpg";
import garaj from "../img/gallery/garaj.jpg";
import bottles from "../img/gallery/bottles.jpg";
import cutie from "../img/gallery/cutie.jpg";
import raft from "../img/gallery/raft.jpg";
import vita2 from "../img/gallery/vita2.jpg";
import crama from "../img/gallery/crama.jpg";
import ferdi_paul from "../img/gallery/ferdi_paul.jpg";
import struguri from "../img/gallery/struguri.jpg";
import cutie2 from "../img/gallery/cutie2.jpg";
import raft2 from "../img/gallery/raft2.jpg";

const GalleryNew = () => {
    const [bar, setBar] = useState(true);
    const isMobile = window.innerWidth < 769;

    useEffect(() => {
        AOS.init({
            once: true,
        });
        if (isMobile) setBar(false);
        window.scroll(0, 0);
    }, [isMobile]);

    const options = {
        thumbnails: {
            showThumbnails: bar,
        },
        buttons: {
            showNextButton: true,
            showPrevButton: true,
            size: "40px",
        },
    };

    return (
        <div id="ferdi-gallery">
            <Helmet>
                <title>Crama Ferdi | Galerie</title>
            </Helmet>
            <ConfirmAgeModal />
            <div className="gallery-intro">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-anchor="#start"
                    data-aos-delay="250">
                    GALERIE
                </h1>
                <a href="#galerie" className="scroll-down">
                    <Img src={down} alt="Scroll Down" />
                </a>
                <div id="galerie"></div>
            </div>
            <Container className="gallery--body py-5">
                <h2>Vă invităm într-o scurtă calătorie prin crama noastră</h2>
                <SRLWrapper options={options}>
                    <div className="gallery-card">
                        <div className="gallery-images-row">
                            <div className="gallery-image-container">
                                <Img src={ferdi_paul}></Img>
                            </div>
                            <div className="gallery-image-container">
                                <Img src={garaj}></Img>
                            </div>
                            <div className="gallery-image-container">
                                <Img src={butoaie}></Img>
                            </div>
                        </div>
                        <div className="gallery-images-row">
                            <div className="gallery-image-container">
                                <Img src={vita2}></Img>
                            </div>
                            <div className="gallery-image-container">
                                <Img src={crama}></Img>
                            </div>
                            <div className="gallery-image-container">
                                <Img src={struguri}></Img>
                            </div>
                        </div>
                        <div className="gallery-images-row">
                            <div className="gallery-image-container">
                                <Img src={cutie}></Img>
                            </div>
                            <div className="gallery-image-container">
                                <Img src={bottle}></Img>
                            </div>
                            <div className="gallery-image-container">
                                <Img src={cutie2}></Img>
                            </div>
                        </div>
                        <div className="gallery-images-row">
                            <div className="gallery-image-container">
                                <Img src={raft}></Img>
                            </div>
                            <div className="gallery-image-container">
                                <Img src={bottles}></Img>
                            </div>
                            <div className="gallery-image-container">
                                <Img src={raft2}></Img>
                            </div>
                        </div>
                    </div>
                </SRLWrapper>
            </Container>
        </div>
    );
};

export default GalleryNew;
