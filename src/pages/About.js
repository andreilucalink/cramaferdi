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
                            <b>Crama Ferdi</b> – o pasiune care transcende
                            meșteșugul și se transformă în artă. Așa a luat
                            naștere această cramă care, deși relativ tânără, are
                            rădăcini adânci în dorința de a măiestri vinul.
                            Crama Ferdi reprezintă, în totalitate, viziunea și
                            conceptul proprietarului și vinificatorului cramei,
                            Fernando Mihăilescu, cel care și-a asumat provocarea
                            creării vinurilor într-un stil personal dar după
                            metoda tradițională; ulterior alăturându-i-se în
                            acest demers îndrăzneț și fiul său, Paul Mihăilescu.
                        </div>
                    </Col>
                    <Col className="about-col-right about-col">
                        <Img src={ferdi} alt="Fernando Mihailescu" />
                    </Col>
                </Row>
                <Row className="about-row about-reverse">
                    <Col className="about-col-left about-col">
                        <div data-aos="fade-up">
                            <b>În urmă cu câțiva ani</b> ne făceam, timid, loc
                            în zona Tohani. Prioritatea noastră a fost,
                            întotdeauna, atingerea excelenței în producția de
                            vinuri, știind că vinul de calitate își are obârșia
                            în vie. Ca urmare, după un atent proces de îngrijire
                            a viei, începem selecția pe fiecare butuc în parte
                            iar, la final, recoltăm manual în lădițe, în vederea
                            obținerii unor struguri de primă clasă. Sistemul de
                            vinificație este unul de perspectivă îndelungată,
                            având în vedere că vinurile roșii sunt maturate, de
                            la 1 la 2 ani, în barrique-uri de stejar.
                        </div>
                    </Col>
                    <Col className="about-col-right about-col">
                        <Img src={crama} alt="Fernando Mihailescu" />
                    </Col>
                </Row>
                <Row className="about-row row-gray">
                    <Col className="about-col-left about-col">
                        <div data-aos="fade-up">
                            <b>Principiul nostru «less is more»</b> se observă
                            începând cu intervenția minimă în procesul de
                            vinifcație, vinurile transmițând adevărata esență a
                            terroir-ului din care provin, și finalizând cu
                            denumirile acestora, care au legătură cu memoria
                            afectivă a făuritorului lor. Vinurile Cramei Ferdi
                            se disting prin naturalețe, consistență, aciditate
                            și eleganță. Utilizarea metodei tradiționale de
                            făcut vinul are ca rezultat o gamă de vinuri
                            echilibrate și rafinate.
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
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe
                        width="100%"
                        height="400"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Crama%20Ferdi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        title="crama-ferdi"></iframe>

                    <br />

                    <a href="https://www.embedgooglemap.net">
                        embedgooglemap.net
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
