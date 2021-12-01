import React, { useEffect, useState } from "react";
import "../css/gallery.css";
import Img from "react-image";
import { SRLWrapper } from "simple-react-lightbox";

import crama from "../img/gallery/crama.jpg";
import crama2 from "../img/gallery/crama2.jpg";
import baric from "../img/gallery/baric.jpg";
import baric2 from "../img/gallery/baric2.jpg";
import fp from "../img/gallery/fp.jpg";
import sticle from "../img/gallery/sticle.jpg";
import sticle2 from "../img/gallery/sticle2.jpg";
import vinuri from "../img/gallery/vinuri.jpg";
import vinuri2 from "../img/gallery/vinuri2.jpg";
import vinuri3 from "../img/gallery/vinuri3.jpg";
import vinuri4 from "../img/gallery/vinuri4.jpg";
import vinuri5 from "../img/gallery/vinuri5.jpg";
import winebox from "../img/gallery/winebox.jpg";
import vita from "../img/gallery/vita.jpg";
import vita2 from "../img/gallery/vita2.jpg";
import fp2 from "../img/gallery/fp2.jpg";
import img_loader from "../img/gallery/img_loader.svg";
import ev1 from "../img/gallery/ev1.jpg";
import ev2 from "../img/gallery/ev2.jpg";
import ev3 from "../img/gallery/ev3.jpg";
import ev4 from "../img/gallery/ev4.jpg";

const Gallery = () => {
    const [bar, setBar] = useState(true);
    const isMobile = window.innerWidth < 769;

    useEffect(() => {
        if (isMobile) setBar(false);
        window.scroll(0, 0);
    }, [isMobile]);

    const options = {
        thumbnails: {
            showThumbnails: bar,
        },
        buttons: {
            showNextButton: true,
            showPrevButton: true,
            size: "40px",
        },
    };
    return (
        <div className="gallery-page">
            <SRLWrapper options={options} className="gallery-page">
                <div className="img-grid">
                    <div className="img-grid-inner">
                        <div className="img-item">
                            <Img
                                src={ev1}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={ev2}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={ev3}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={ev4}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={crama}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={crama2}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={baric}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={baric2}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={fp}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={sticle}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={vinuri}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={vinuri2}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={vinuri3}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={winebox}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={vinuri4}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={vinuri5}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={vita}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={vita2}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={fp2}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                        <div className="img-item">
                            <Img
                                src={sticle2}
                                className="img-item-inner"
                                loader={
                                    <img
                                        src={img_loader}
                                        className="img-item-inner"
                                        alt="loader"
                                    />
                                }
                            />
                        </div>
                    </div>
                </div>
            </SRLWrapper>
        </div>
    );
};

export default Gallery;
