import React, { useEffect } from "react";
import AOS from "aos";
import "../css/cazare.css";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import Img from "react-image";
import imgloader from "../img/cazare_loader.svg";
import c1 from "../img/cazare/c1.jpg";
import c2 from "../img/cazare/c2.jpg";
import c3 from "../img/cazare/c3.jpg";
import c4 from "../img/cazare/c4.jpg";
import c5 from "../img/cazare/c5.jpg";
import c6 from "../img/cazare/c6.jpg";

const loader = <img src={imgloader} alt="Loading..." />;

const Cazare = () => {
    useEffect(() => {
        window.scroll(0, 0);
        AOS.init({
            once: true,
            duration: 400,
        });
    });
    return (
        <div className="cazare-body">
            <Helmet>
                <title>Crama Ferdi | Cazare</title>
            </Helmet>
            <Container className="cazare-details">
                <h2>Cazare pentru clienţii cramei</h2>
                <div className="cazare-card">
                    <div>
                        <i
                            className="fas fa-check-circle"
                            aria-hidden="true"></i>{" "}
                        Prin partenerii noştri <b>KIM Country Club</b>
                    </div>
                    <div>
                        <i
                            className="fas fa-check-circle"
                            aria-hidden="true"></i>{" "}
                        Discount 10%
                    </div>
                    <div>
                        <i
                            className="fas fa-check-circle"
                            aria-hidden="true"></i>{" "}
                        Distanţă de 3km până la cramă
                    </div>

                    <div className="cazare-images">
                        <a
                            className="cazare-image-container"
                            href="https://kimcountryclub.ro"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Img src={c1} loader={loader}></Img>
                        </a>
                        <a
                            className="cazare-image-container"
                            href="https://kimcountryclub.ro"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Img src={c2} loader={loader}></Img>
                        </a>
                        <a
                            className="cazare-image-container"
                            href="https://kimcountryclub.ro"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Img src={c3} loader={loader}></Img>
                        </a>
                    </div>
                    <div className="cazare-images">
                        <a
                            className="cazare-image-container"
                            href="https://kimcountryclub.ro"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Img src={c4} loader={loader}></Img>
                        </a>
                        <a
                            className="cazare-image-container"
                            href="https://kimcountryclub.ro"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Img src={c5} loader={loader}></Img>
                        </a>
                        <a
                            className="cazare-image-container"
                            href="https://kimcountryclub.ro"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Img src={c6} loader={loader}></Img>
                        </a>
                    </div>
                    <a
                        className="cazare-button"
                        href="https://kimcountryclub.ro"
                        target="_blank"
                        rel="noopener noreferrer">
                        Detalii și rezervări
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default Cazare;
