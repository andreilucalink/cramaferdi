import React from "react";
import { redKing_2020_legend } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/RKL2020.jpg";
import modalImage from "../../img/etichete/RKL2020.jpg";

const RedKing2020_Legend = () => {
    return (
        <WinePage
            title={redKing_2020_legend.title}
            year={redKing_2020_legend.year}
            price={redKing_2020_legend.price}
            description={redKing_2020_legend.description}
            type={redKing_2020_legend.type}
            maturing={redKing_2020_legend.maturing}
            alchool={redKing_2020_legend.alchool}
            color={redKing_2020_legend.color}
            qty={redKing_2020_legend.qty}
            grapes={redKing_2020_legend.grapes}
            img={img}
            modalImage={modalImage}
            decantation={redKing_2020_legend.decantation}
        />
    );
};

export default RedKing2020_Legend;
