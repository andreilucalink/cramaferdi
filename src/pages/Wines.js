import React, { useEffect, useRef } from "react";
import "../css/wines.css";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

// Components
import WineCard from "./pagesComponents/WineCard";

// Images
import calx2022 from "../img/wines/CALX2022.jpg";
import rc2022 from "../img/wines/RC2022.jpg";
import mrsl2020 from "../img/wines/MRSL2020_new.jpg";
import cunp2021 from "../img/wines/CUNP2021.jpg";
import lbk2021 from "../img/wines/LBK2021.jpg";
import cfr2021 from "../img/wines/CFR2021.jpg";
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
                <div id="wines" ref={winesRef}></div>
            </div>
            <Container className="wines-list">
                <div className="wines-header">
                    <h2>Vinuri cu rădăcini în pasiune, curaj și dăruire.</h2>
                    <p>
                        Pentru a comanda vinuri sau pentru degustări şi vizite
                        la cramă, contactaţi-ne la numerele de telefon sau la
                        adresa de e-mail din pagina de contact.
                    </p>
                </div>

                <Row>
                    <WineCard
                        link="/vinuri/mister-s-legend-2020"
                        price="150 RON"
                        img={mrsl2020}
                        title="Mister S Legend"
                        year="2020"
                    />
                    <WineCard
                        link="/vinuri/cuvee-francisc-2021"
                        price="120 RON"
                        img={cfr2021}
                        title="Cuveé Francisc Ed. Lim."
                        year="2021"
                    />
                    <WineCard
                        link="/vinuri/lady-black-2021"
                        price="115 RON"
                        img={lbk2021}
                        title="Lady Black Ed. Lim."
                        year="2021"
                    />
                    <WineCard
                        link="/vinuri/cuvee-unchiu-puiu-2021"
                        price="70 RON"
                        img={cunp2021}
                        title="Cuveé Unchiu Puiu"
                        year="2021"
                    />
                </Row>
                <Row>
                    <WineCard
                        link="/vinuri/rose-cosmina-2022"
                        price="60 RON"
                        img={rc2022}
                        title="Rosé Cosmina Ed. Lim."
                        year="2022"
                    />
                    <WineCard
                        link="/vinuri/cuvee-alexandra-2022"
                        price="70 RON"
                        img={calx2022}
                        title="Cuveé Alexandra Ed. Lim."
                        year="2022"
                    />
                </Row>
            </Container>
        </div>
    );
};

export default Wines;
