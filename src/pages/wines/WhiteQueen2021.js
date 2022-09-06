import React from "react";
import { whiteQueen_2021 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/WHQ2020.jpg";
import modalImage from "../../img/etichete/WHQ2020.jpg";

const WhiteQueen2021 = () => {
    return (
        <WinePage
            title={whiteQueen_2021.title}
            year={whiteQueen_2021.year}
            price={whiteQueen_2021.price}
            description={whiteQueen_2021.description}
            type={whiteQueen_2021.type}
            maturing={whiteQueen_2021.maturing}
            alchool={whiteQueen_2021.alchool}
            color={whiteQueen_2021.color}
            qty={whiteQueen_2021.qty}
            grapes={whiteQueen_2021.grapes}
            img={img}
            decantation={whiteQueen_2021.decantation}
            modalImage={modalImage}
        />
    );
};

export default WhiteQueen2021;
