import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img from "react-image";
import WineLoader from "../pagesComponents/WineLoader";

const WineCard = ({ img, link, year, title, price }) => {
  return (
    <Col className="wine-card" lg={3} md={6} xs={12}>
      <Col className="wine-description" md={12}>
        <Img
          src={img}
          loader={
            <div className="loader-wrapper">
              <WineLoader />
            </div>
          }
          className="border-top-corners"
        />
        <div className="wine-info border-bottom-corners">
          <p className="price">{price}</p>
          <p>
            {title} {year}
          </p>
          <Link className="wine-details-btn" to={link}>
            Vezi mai mult...
          </Link>
        </div>
      </Col>
    </Col>
  );
};

export default WineCard;
