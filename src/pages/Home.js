import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Image, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { newsCards } from "./pagesComponents/newsItems";
import AOS from "aos";
import AliceCarousel from "react-alice-carousel";
import Img from "react-image";

import "../css/ferdiHome.css";

// Components
import ConfirmAgeModal from "./pagesComponents/ConfirmAgeModal";

// Images
import { rightArrow, leftArrow } from "./pagesComponents/arrows";
import wines from "../img/home/vinuri_home.jpg";
import crama from "../img/home/crama_home.jpg";
import about from "../img/home/about.jpg";
import home_img from "../img/home/home.jpg";
import home_phone_img from "../img/home/home_p.jpg";

const responsive = {
    0: {
        items: 1,
    },
    767: {
        items: 2,
    },
    1250: {
        items: 3,
    },
    1680: {
        items: 4,
    },
};

const Home = () => {
    useEffect(() => {
        window.scroll(0, 0);

        AOS.init({
            once: true,
            duration: 1000,
        });
        document.getElementsByClassName(
            "alice-carousel__next-btn-item"
        )[0].innerHTML = rightArrow;
        document.getElementsByClassName(
            "alice-carousel__prev-btn-item"
        )[0].innerHTML = leftArrow;
    }, []);

    const homeImage = window.innerWidth <= 1024 ? home_phone_img : home_img;
    const textAnimation = window.innerWidth < 768 ? "fade-left" : "fade-right";

    return (
        <>
            <ConfirmAgeModal />
            <Helmet>
                <title>Crama Ferdi | Acasă</title>
            </Helmet>

            <section className="ferdi-home1">
                <Img src={homeImage} className="ferdi-home-img" />
                <h1 className="crama-ferdi">CRAMA FERDI</h1>
            </section>
            <section className="ferdi-home2">
                {/* <div className="dark-layer"></div> */}
                <h1 className="ferdi-home2-header">
                    Ultimele <br /> noutăţi
                </h1>
                <AliceCarousel
                    mouseTracking
                    items={newsCards}
                    responsive={responsive}
                    disableDotsControls={true}
                />
            </section>
            <section className="ferdi-home3">
                <Row className="ferdi-link-row">
                    <Col
                        md={6}
                        xs={12}
                        className="ferdi-image-col align-end left-col">
                        <Image fluid src={wines} />
                    </Col>
                    <Col md={6} xs={12} className="ferdi-text-col right-col">
                        <Link
                            to="/vinuri"
                            data-aos="fade-left"
                            data-aos-delay="300"
                            className="dark-gradient">
                            <h1>Vinuri</h1>
                        </Link>
                        <div data-aos="fade-left" data-aos-delay="600">
                            Cu rădăcini in pasiune, curaj și dăruire.
                        </div>
                        {/* <div className="link-detalii">
                            Detalii <i class="fas fa-arrow-right"></i>
                        </div> */}
                    </Col>
                </Row>
                <Row className="ferdi-link-row row-gray row-reverse">
                    <Col
                        md={6}
                        xs={12}
                        className="ferdi-image-col align-start right-col">
                        <Image fluid src={crama} />
                    </Col>
                    <Col
                        md={6}
                        xs={12}
                        className="ferdi-text-col ferdi-text-padding left-col">
                        <Link
                            to="/vizite-si-degustari"
                            data-aos={textAnimation}
                            data-aos-delay="300"
                            className="dark-gradient">
                            <h1>Degustări</h1>
                        </Link>
                        <div data-aos={textAnimation} data-aos-delay="600">
                            Vizite şi degustări la cramă.
                        </div>
                        {/* <div>
                            Detalii <i class="fas fa-arrow-right"></i>
                        </div> */}
                    </Col>
                </Row>
                <Row className="ferdi-link-row">
                    <Col
                        md={6}
                        xs={12}
                        className="ferdi-image-col align-end left-col">
                        <Image fluid src={about} />
                    </Col>
                    <Col md={6} xs={12} className="ferdi-text-col right-col">
                        <Link
                            to="/despre-noi"
                            data-aos="fade-left"
                            data-aos-delay="300"
                            className="dark-gradient">
                            <h1>Despre noi</h1>
                        </Link>
                        <div data-aos="fade-left" data-aos-delay="600">
                            Când şi unde a început totul.
                        </div>
                        {/* <div>
                            Detalii <i class="fas fa-arrow-right"></i>
                        </div> */}
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default Home;
