import React, { useEffect } from "react";
import "../css/about.css";
import Img from "react-image";
import { Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import AOS from "aos";

// images
import ferdi from "../img/ferdi.jpg";
import crama from "../img/crama.jpg";
import baric from "../img/baric.jpg";
// import vinuri from "../img/vinuri2.jpg";
import about_img from "../img/vinuri.jpg";

const About = () => {
    useEffect(() => {
        window.scroll(0, 0);

        AOS.init({
            once: true,
            duration: 1000,
        });
    });
    return (
        <div id="about-page">
            <Helmet>
                <title>Crama Ferdi | Despre Noi</title>
            </Helmet>
            <section className="about-ferdi1">
                <Img src={about_img} className="ferdi-about-img" />
                <h1 className="despre-noi">DESPRE NOI</h1>
            </section>
            <section className="about-ferdi2">
                <Row className="about-row row-gray">
                    <Col className="about-col-left about-col">
                        <div data-aos="fade-up">
                            <span>Povestea Cramei Ferdi </span> a început în
                            anul 2009, când după ani buni de a fi un pasionat și
                            iubitor de vinuri, Fernando Mihăilescu, a vrut să
                            își ducă această pasiune la următorul nivel, acela
                            de a avea propria sa crama și de a-și “făuri”
                            vinurile după propriul gust pentru el și prietenii
                            lui. Așa că în 2009 a construit o mică cramă în
                            comuna Vâlcanești Județul Prahova, unde a început să
                            experimenteze cu diverse soiuri de struguri și să
                            creeze primele vinuri ale cramei Ferdi. Ulterior în
                            2018 i s-a alăturat fiul său Paul Mihăilescu și
                            împreună au evoluat această pasiune într-o mică
                            afacere de familie.
                        </div>
                    </Col>
                    <Col className="about-col-right about-col">
                        <Img src={ferdi} alt="Fernando Mihailescu" />
                    </Col>
                </Row>
                <Row className="about-row about-reverse">
                    <Col className="about-col-left about-col">
                        <div data-aos="fade-up">
                            <span>Crama Ferdi </span> este o cramă boutique
                            premium ce vinifică anual aproximativ 20.000 de
                            sticle prin metode tradiționale. Procesul de
                            vinificație este unul complex și de perspectivă
                            îndelungată, vinurile roșii fiind maturate în
                            baricurui de stejar, între un an și doi ani,
                            reînnoite la 4 ani. Un principiu care stă la baza
                            procesului de vinificație este acela de a obține o
                            calitate deosebită a strugurilor noștri prin
                            selecția atentă a acestora și tăierea lor în verde.
                            Viile se află în regiunea Dealul Mare, în
                            localitățile Valea Călugărească și Tohani, dar și în
                            spatele cramei în localitatea Vâlcanești.
                        </div>
                    </Col>
                    <Col className="about-col-right about-col">
                        <Img src={crama} alt="Fernando Mihailescu" />
                    </Col>
                </Row>
                <Row className="about-row row-gray">
                    <Col className="about-col-left about-col">
                        <div data-aos="fade-up">
                            <span> Vinificăm 10 soiuri de struguri </span>
                            dintre care 6 roșii (Fetească Neagră, Cabernet
                            Sauvignon, Cabernet Franc, Shiraz, Merlot, Burgund
                            Mare), care se regăsesc în diferite cupaje, unele
                            din cele mai apreciate fiind Cuvee Paul, Cuvee
                            Pițigaia, Cuvee Francisc dar și în monosepaje precum
                            Lady Black, Red King, Mister S, și 4 soiuri albe:
                            Sauvignon Blanc, Tămâioasa Românească, Riesling
                            Italian și Chardonnay.
                        </div>
                    </Col>
                    <Col className="about-col-right about-col">
                        <Img src={baric} alt="Fernando Mihailescu" />
                    </Col>
                </Row>
                {/* <Row className="about-row about-reverse">
                    <Col className="about-col-left about-col">
                        <div data-aos="fade-up">
                            <span>Vinificăm 6 soiuri </span>de struguri roşii:
                            Fetească Neagră, Cabernet Sauvignon, Cabernet Franc,
                            Shiraz, Merlot, Burgund Mare, Pinot Noir şi 4 soiuri
                            albe: Sauvignon Blanc, Tămâioasa Românească și
                            Riesling Italian, Chardonnay.
                        </div>
                    </Col>
                    <Col className="about-col-right about-col">
                        <Img src={vinuri} alt="Fernando Mihailescu" />
                    </Col>
                </Row> */}
            </section>
        </div>
    );
};

export default About;
