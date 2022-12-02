import React, { useEffect, useRef } from "react";
import "../css/wines.css";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

// Components
import WineCard from "./pagesComponents/WineCard";

// Images
// import calx2021_lim from "../img/wines/CALX2021.jpg";
// import calx2021 from "../img/wines/CALX2021_2.jpg";
// import mads2021 from "../img/wines/MADS2021.jpg";
// import lbk2020 from "../img/wines/LBK2020.jpg";
// import cunp2020 from "../img/wines/CUNP2020.jpg";
// import cfr2020 from "../img/wines/CFR2020.jpg";
import whq2021 from "../img/wines/WHQ2021.jpg";
import rkl2020 from "../img/wines/RKL2020.jpg";
import calx2022 from "../img/wines/CALX2022_new.jpg";
import rc2022 from "../img/wines/RC2022_new.jpg";

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
                    <WineCard
                        link="/vinuri/red-king-2020-legend"
                        price="150 RON"
                        img={rkl2020}
                        title="Red King Legend"
                        year="2020"
                    />
                    <WineCard
                        link="/vinuri/white-queen-2021"
                        price="110 RON"
                        img={whq2021}
                        title="White Queen Ed. Lim."
                        year="2021"
                    />
                </Row>
            </Container>
        </div>
    );
};

export default Wines;
