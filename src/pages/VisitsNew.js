import React, { useEffect } from "react";
import AOS from "aos";
import "../css/visits.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

// Components
import ConfirmAgeModal from "./pagesComponents/ConfirmAgeModal";

const VisitsNew = () => {
    useEffect(() => {
        window.scroll(0, 0);
        AOS.init({
            once: true,
            duration: 400,
        });
    });

    return (
        <div className="visits-body">
            <Helmet>
                <title>Crama Ferdi | Vizite şi degustări</title>
            </Helmet>
            <ConfirmAgeModal />
            <div className="visits-intro">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-anchor="#start"
                    data-aos-delay="250">
                    VIZITE ŞI DEGUSTĂRI
                </h1>
            </div>
            <div className="programari-pachete-degustari">
                <Container className="visits-header">
                    <h2>Pachete de degustări şi regulament pentru vizite </h2>
                    <p className="visits-description-p">
                        Vă aşteptăm cu drag să ne vizitaţi şi să degustăm
                        împreună vinurile cramei Ferdi în locul unde, în urmă cu
                        10 ani, a luat naştere pasiunea noastră pentru vin.
                    </p>
                    <p>
                        Vizitele se fac organizat, în grupuri de <b>4-12</b>{" "}
                        persoane, în baza unei programări prealabile realizate
                        la numerele de telefon sau la adresa de e-mail din
                        pagina de contact.
                    </p>
                </Container>
                <Container className="pachete-wrapper">
                    <div className="pachet card-light">
                        <h5>standard</h5>
                        <ul>
                            <li>
                                <i className="fas fa-check-circle"></i>Tur al
                                cramei
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>Degustare
                                5 vinuri
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>Timp
                                alocat - 1 oră
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>Apă şi
                                grisine
                            </li>
                        </ul>
                        <p className="pachet-price">50 RON/Persoana</p>
                        {/* <p className="pachet-description">
                            La achiziționarea a <b>6 sticle</b> de vin nu se mai
                            percepe taxă de degustare.
                        </p> */}
                    </div>

                    <div className="pachet card-dark">
                        <h5>premium</h5>
                        <ul>
                            <li>
                                <i className="fas fa-check-circle"></i>Tur al
                                cramei
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>Degustare
                                7 vinuri
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>Timp
                                alocat - 1 oră şi 45 min
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>Platou
                                ham & cheese
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>Apă şi
                                grisine
                            </li>
                        </ul>
                        <p className="pachet-price">100 RON/Persoana</p>
                        {/* <p className="pachet-description">
                            La achiziționarea a <b>12 sticle</b> de vin nu se
                            mai percepe taxă de degustare.
                        </p> */}
                    </div>
                    <div className="pachet card-private">
                        <h5>Degustări Private</h5>
                        <p className="private-subtitle">
                            Degustări la evenimente <br />
                            private / petreceri / team building
                        </p>
                        <ul>
                            <li>
                                <i className="fas fa-check-circle"></i>Deplasare
                                la eveniment
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                Prezentare a cramei
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                Degustarea și prezentarea a 6 vinuri
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>Întrebări
                                și răspunsuri
                            </li>
                        </ul>
                        <p className="pachet-description-private">
                            Preţul este în funcție de numarul de persoane și
                            locație, pentru mai multe informații și oferte ne
                            găsiți la <Link to="/contact">CONTACT</Link>
                        </p>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default VisitsNew;
