import React, { useEffect, useRef } from "react";
import "../css/wines.css";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

// Components
import WineCard from "./pagesComponents/WineCard";

// Older wines
// import calx from '../img/wines/CALX2020.png';
// import cosm from '../img/wines/RC2020.png';
// import ladyblk from '../img/wines/LBK2019_new.png';
// import mrsr from "../img/wines/MRSR2018.png";
// import rkr from '../img/wines/RKR2018.png';
// import whq from "../img/wines/WHQ2020_new.jpg";
// import blau from "../img/wines/BLAUB2018.jpg";
// import cunp from "../img/wines/CUNP2019_medal.jpg";
// import rk2019 from "../img/wines/RK2019.jpg";

// Images
// import down from "../img/dwn-light.svg";
import cfr2019 from "../img/wines/CFR2019.jpg";
import cupr2019 from "../img/wines/CUPR2019.jpg";
import rc2021 from "../img/wines/RC2021_new.jpg";
import calx2021 from "../img/wines/CALX2021_new.jpg";
import lbkl2019 from "../img/wines/LBKL2019_new.jpg";
import cpit2019 from "../img/wines/CPIT2019_new.jpg";

const Wines = () => {
    const winesRef = useRef(null);
    useEffect(() => {
        if (window.location.hash === "") {
            window.scroll(0, 0);
        } else {
            window.scroll(0, winesRef.current.offsetTop + 75);
        }
    }, []);

    return (
        <div id="wines-page">
            <Helmet>
                <title>Crama Ferdi | Vinuri</title>
            </Helmet>
            <div className="wines-intro">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-anchor="#start"
                    data-aos-delay="250">
                    VINURI
                </h1>
                {/* <a href="#wines" className="scroll-down">
                    <Img src={down} alt="Scroll Down" />
                </a> */}
                <div id="wines" ref={winesRef}></div>
            </div>
            <Container className="wines-list">
                <div className="wines-header">
                    <h2>Vinuri cu rădăcini în pasiune, curaj și dăruire.</h2>
                    <p>
                        Pentru a comanda vinuri sau pentru degustări şi vizite
                        la cramă, contactaţi-ne la numerele de telefon sau
                        adresa de e-mail din pagina de contact.
                    </p>
                </div>
                <Row>
                    <WineCard
                        link="/vinuri/rose-cosmina-2021"
                        price="55 RON"
                        img={rc2021}
                        title="Rosé Cosmina"
                        year="2021"
                    />
                    <WineCard
                        link="/vinuri/cuvee-alexandra-2021"
                        price="60 RON"
                        img={calx2021}
                        title="Cuveé Alexandra"
                        year="2021"
                    />
                    <WineCard
                        link="/vinuri/lady-black-legend-2019"
                        price="140 RON"
                        img={lbkl2019}
                        title="Lady Black Legend"
                        year="2019"
                    />
                    <WineCard
                        link="/vinuri/cuvee-pitigaia-2019"
                        price="110 RON"
                        img={cpit2019}
                        title="Cuveé Piţigaia"
                        year="2019"
                    />
                </Row>
                <Row>
                    <WineCard
                        link="/vinuri/cuvee-paul-rezerva-2019"
                        price="120 RON"
                        img={cupr2019}
                        title="Cuvée Paul Rezerva"
                        year="2019"
                    />
                    <WineCard
                        link="/vinuri/cuvee-francisc-2019"
                        price="110 RON"
                        img={cfr2019}
                        title="Cuvée Francisc"
                        year="2019"
                    />
                </Row>
            </Container>
        </div>
    );
};

export default Wines;
