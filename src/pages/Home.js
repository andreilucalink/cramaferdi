import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
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
    // const textAnimation = window.innerWidth < 768 ? "fade-left" : "fade-right";

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
                <div className="ferdi-home-row ferdi-home-reverse-row">
                    <div className="ferdi-left-col">
                        <Link to="/vinuri">
                            <Image fluid src={wines} />
                        </Link>
                    </div>
                    <div className="ferdi-right-col">
                        <h1 className="ferdi-home-link">
                            <Link to="/vinuri" className="dark-gradient">
                                Vinuri
                            </Link>
                        </h1>
                        <div className="ferdi-subtitle">
                            CU RĂDĂCINI IN PASIUNE, CURAJ ȘI DĂRUIRE.
                        </div>
                    </div>
                </div>
                <div className="ferdi-home-row row-gray">
                    <div className="ferdi-reverse-left-col">
                        <h1 className="ferdi-home-link">
                            <Link
                                to="/vizite-si-degustari"
                                className="dark-gradient">
                                Degustări
                            </Link>
                        </h1>
                        <div className="ferdi-subtitle">
                            VIZITE ŞI DEGUSTĂRI LA CRAMĂ.
                        </div>
                    </div>
                    <div className="ferdi-reverse-right-col">
                        <Link to="/vizite-si-degustari">
                            <Image fluid src={crama} />
                        </Link>
                    </div>
                </div>
                <div className="ferdi-home-row ferdi-home-reverse-row">
                    <div className="ferdi-left-col">
                        <Link to="/despre-noi">
                            <Image fluid src={about} />
                        </Link>
                    </div>
                    <div className="ferdi-right-col">
                        <h1 className="ferdi-home-link">
                            <Link to="/despre-noi" className="dark-gradient">
                                despre noi
                            </Link>
                        </h1>
                        <div className="ferdi-subtitle">
                            CÂND ŞI UNDE A ÎNCEPUT TOTUL.
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
