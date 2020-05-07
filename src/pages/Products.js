import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/products.css";
import AOS from "aos";

function Products() {
  useEffect(() => {
    window.scroll(0, 0);
    if (window.innerWidth > 965 && window.innerWidth < 1201) {
      document.getElementById("animation2").removeAttribute("data-aos");
      document.getElementById("animation3").setAttribute("data-aos", "zoom-in");
      document.getElementById("animation4").setAttribute("data-aos", "zoom-in");
      document.getElementById("animation5").setAttribute("data-aos", "zoom-in");
      document.getElementById("animation6").setAttribute("data-aos", "zoom-in");
      document.getElementById("animation7").setAttribute("data-aos", "zoom-in");
      document.getElementById("animation8").setAttribute("data-aos", "zoom-in");
    }
    AOS.init({
      once: true,
      duration: 1000,
    });
    const age = window.sessionStorage.getItem("clientAge");
    if (!age || age === "invalid") {
      window.location.href = "/";
    }
  }, []);
  
  let view = "Vinurile";
  let products = "Noastre";
  let details = "Detalii";
  if (window.localStorage.getItem("language") === "EN") {
    view = "Our";
    products = "Wines";
    details = "View More";
  }

  let innerHeigth = window.innerHeight;
	function getHeigth() {
		if (document.getElementById('home-scroll-up') === null) return;
		if(window.scrollY > (innerHeigth/1.5))
			document.getElementById('home-scroll-up').classList.add('show-home-sroll-btn');	
		else 
			document.getElementById('home-scroll-up').classList.remove('show-home-sroll-btn');	
  }
  window.addEventListener("scroll", getHeigth);


  return (
    <div className="products-page">
      <a role="button" href="#start" data-scroll>
				<img src={require('../img/up-ar.svg')} alt="Go Up" className="back-to-top-btn" id="home-scroll-up" />
			</a>
      <header className="main-header">
        <h1>
          <span> {view} </span> {products}
        </h1>
        <p> Vinuri cu rădăcini in pasiune, curaj și dăruire.</p>
      </header>
      <main className="products-container">
        <div className="card-cell">
          <section className="card-info">
            <div className="img" id="product1" />
            <div>
              <section>
                <h3 className="rose-cosmina">Rosé Cosmina</h3>
                <span className="limit-edit-span">
                  <b>
                    <i>Ediție Limitată 2019</i>
                  </b>
                </span>{" "}
                {/* MODIFICARE PENTRU TELEFON */}
                <div>
                  <ul className="desc-details-list">
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Tip Vin - Sec
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Soi – Shiraz, Blaufränkisch și Pinot Noir
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Conţinut de alcool - 13,7%
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Culoare – Rosé
                    </li>
                  </ul>
                </div>
              </section>
              <Link to="/vinuri/rose-cosmina" className="btn">
                {details}
              </Link>
            </div>
          </section>
        </div>
        <div className="card-cell">
          <section
            className="card-info"
            id="animation2"
            data-aos="fade-right"
            data-aos-offset="150"
          >
            <div className="img" id="product2" />
            <div>
              <section>
                <h3 className="rose-cosmina">Cuvée Alexandra </h3>
                <span className="limit-edit-span">
                  <b>
                    <i>Ediție Limitată 2019</i>
                  </b>
                </span>
                <div>
                  <ul className="desc-details-list">
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Tip Vin - Sec
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Soi – Tămâioasă Românească, Riesling Italian și Sauvignon
                      Blanc
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Conţinut de alcool - 13,9%
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Culoare – Alb
                    </li>
                  </ul>
                </div>
              </section>
              <Link to="/vinuri/cuvee-alexandra" className="btn">
                {details}
              </Link>
            </div>
          </section>
        </div>
        <div className="card-cell">
          <section
            className="card-info"
            id="animation3"
            data-aos="fade-left"
            data-aos-offset="150"
          >
            <div className="img" id="product3" />
            <div>
              <section>
                <h3 className="rose-cosmina">Madame S. </h3>
                <span className="limit-edit-span">
                  <b>
                    <i>Ediție Limitată 2019</i>
                  </b>
                </span>
                <div>
                  <ul className="desc-details-list">
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Tip Vin - Sec
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Soi – Sauvignon Blanc
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Conţinut de alcool - 12,9%
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Culoare – Alb
                    </li>
                  </ul>
                </div>
              </section>
              <Link to="/vinuri/madame-s" className="btn">
                {details}
              </Link>
            </div>
          </section>
        </div>
        <div className="card-cell">
          <section
            className="card-info"
            id="animation4"
            data-aos="fade-right"
            data-aos-offset="150"
          >
            <div className="img" id="product4" />
            <div>
              <section>
                <h3 className="rose-cosmina">Cuvée Unchiu Puiu</h3>
                <span className="limit-edit-span">
                  <b>
                    <i> 2018</i>
                  </b>
                </span>
                <div>
                  <ul className="desc-details-list">
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Tip Vin - Sec
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Soi – Merlot, Shiraz și Blaufränkisch
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Maturare – 6 luni, baric din stejar românesc, american şi
                      francez
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Conţinut de alcool - 14,5%
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Culoare – Roşu
                    </li>
                  </ul>
                </div>
              </section>
              <Link to="/vinuri/unchiu-puiu" className="btn">
                {details}
              </Link>
            </div>
          </section>
        </div>
        <div className="card-cell">
          <section
            className="card-info"
            id="animation5"
            data-aos="fade-left"
            data-aos-offset="150"
          >
            <div className="img" id="product5" />
            <div>
              <section>
                <h3 className="rose-cosmina">Cuvée Francisc</h3>
                <span className="limit-edit-span">
                  <b>
                    <i> 2017</i>
                  </b>
                </span>
                <div>
                  <ul className="desc-details-list">
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Tip Vin - Sec
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Soi – Cabernet Franc și Merlot
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Maturare – 18 luni, baric din stejar românesc, american şi
                      francez
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Conţinut de alcool - 14,9%
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Culoare – Roşu
                    </li>
                  </ul>
                </div>
              </section>
              <Link to="/vinuri/cuvee-francisc" className="btn">
                {details}
              </Link>
            </div>
          </section>
        </div>
        <div className="card-cell">
          <section
            className="card-info"
            id="animation5"
            data-aos="fade-right"
            data-aos-offset="150"
          >
            <div className="img" id="product9" />
            <div>
              <section>
                <h3 className="rose-cosmina">Cuvée Piţigaia</h3>
                <span className="limit-edit-span">
                  <b>
                    <i> 2017</i>
                  </b>
                </span>
                <div>
                  <ul className="desc-details-list">
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Tip Vin - Sec
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Soi – Merlot si Cabernet Sauvignon
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Maturare – 24 luni, baric din stejar românesc, american şi
                      francez
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Conţinut de alcool - 14,5%
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Culoare – Roşu
                    </li>
                  </ul>
                </div>
              </section>
              <Link to="/vinuri/cuvee-pitigaia" className="btn">
                {details}
              </Link>
            </div>
          </section>
        </div>
        <div className="card-cell">
          <section
            className="card-info"
            id="animation6"
            data-aos="fade-left"
            data-aos-offset="150"
          >
            <div className="img" id="product6" />
            <div>
              <section>
                <h3 className="rose-cosmina">Red King</h3>
                <span className="limit-edit-span">
                  <b>
                    <i>Rezerva 2017</i>
                  </b>
                </span>
                <div>
                  <ul className="desc-details-list">
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Tip Vin - Sec
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Soi – Cabernet Sauvignon
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Maturare – 22 luni, baric din stejar românesc, american şi
                      francez
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Conţinut de alcool - 14,5%
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Culoare – Roşu
                    </li>
                  </ul>
                </div>
              </section>
              <Link to="/vinuri/red-king" className="btn">
                {details}
              </Link>
            </div>
          </section>
        </div>
        <div className="card-cell">
          <section
            className="card-info"
            id="animation7"
            data-aos="fade-right"
            data-aos-offset="150"
          >
            <div className="img" id="product7" />
            <div>
              <section>
                <h3 className="rose-cosmina">Mister S.</h3>
                <span className="limit-edit-span">
                  <b>
                    <i>Rezerva 2017</i>
                  </b>
                </span>
                <div>
                  <ul className="desc-details-list">
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Tip Vin - Sec
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Soi – Shiraz
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Maturare – 20 luni, baric din stejar românesc, american şi
                      francez
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Conţinut de alcool - 14,4%
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Culoare – Roşu
                    </li>
                  </ul>
                </div>
              </section>
              <Link to="/vinuri/mister-s" className="btn">
                {details}
              </Link>
            </div>
          </section>
        </div>
        <div className="card-cell">
          <section
            className="card-info"
            id="animation8"
            data-aos="fade-left"
            data-aos-offset="150"
          >
            <div className="img" id="product8" />
            <div>
              <section>
                <h3 className="rose-cosmina">Cuvée Paul Port </h3>
                <span className="limit-edit-span">
                  <b>
                    <i>2016</i>
                  </b>
                </span>
                <div>
                  <ul className="desc-details-list">
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Tip Vin - Demidulce
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Soi – Fetească Neagră şi Cabernet Sauvignon
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Maturare – 24 luni, baric din stejar românesc, american şi
                      francez
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Volum - 0,75L
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Conţinut de alcool - 14,9%
                    </li>
                    <li>
                      <i className="fas fa-caret-right list-arrow"></i>
                      Culoare – Roşu
                    </li>
                  </ul>
                </div>
              </section>
              <Link to="/vinuri/cuvee-paul-port" className="btn">
                {details}
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Products;
