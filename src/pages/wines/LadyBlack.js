import React, { useEffect } from "react";
import "../../css/singleProduct.css";
import Img from "react-image";
import { Spinner } from "react-bootstrap";
import { DotLoader } from "react-spinners";
import { Link } from "react-router-dom";

const LadyBlack = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const age = window.sessionStorage.getItem("clientAge");
    if (!age || age === "invalid") {
      window.location.href = "/";
    }
  }, []);

  const override = `
            position: absolute;
            top: 30%;
            left: 40%;
            height: 200px;
            width: 200px;
            `;
  return (
    <div className="single-product-container bg-ladyblack">
      <div className="single-product-image">
        <Img
          className="spimg"
          src={require("../../img/ladybk.png")}
          loader={
            <DotLoader
              css={override}
              className="product-spinner"
              size={200}
              color={"#0f2027"}
            />
          }
        />
      </div>
      <div className="single-product-desc">
        <h1>Lady Black 2018</h1>
        <div className="wine-comp-desc">
          <Img
            className="grape-comp"
            src={require("../../img/dkg.svg")}
            loader={<Spinner className="grape-spinner" animation="border" />}
          />
          <span id="grp">{"(Fetească Neagră)"}</span>
        </div>

        <div className="text-desc">
          Lady Black – Ediție Limitată – este Feteasca Neagră cu note olfactive
          de cacao şi condimente care te învăluie în aromele de fructe roşii,
          oferă o senzație gustativă inedită şi surpinde plăcut prin astringenţa
          incitanta, pe un fond de taninuri de fruct copt si lemn, cu un
          potențial de învechire de 5 până la 7 ani. Albastrul regal este
          culoarea capişonului de ceară cu sigiliul cramei. Anul recoltei este
          2018 iar gradul alcoolic este 14,5%.
          <ul className="swp-list">
            <li>
              <i className="fas fa-caret-right list-arrow"></i>
              Tip Vin - Sec
            </li>
            <li>
              <i className="fas fa-caret-right list-arrow"></i>
              Maturare – 14 luni, baric din stejar românesc
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
              Culoare – Roșu
            </li>
          </ul>
        </div>
        <div className="desc-buttons">
          <Link to="/vinuri" className="desc-btn desc-btn-left">
            Vinuri
          </Link>
          <Link to="/" className="desc-btn btn-desc-right">
            Acasă
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LadyBlack;