import React from "react";
import { redKing_2019 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/RK2019.jpg";
import modalImage from "../../img/etichete/RK2019.jpg";

const RedKing_2019 = () => {
    return (
        <WinePage
            title={redKing_2019.title}
            year={redKing_2019.year}
            price={redKing_2019.price}
            description={redKing_2019.description}
            type={redKing_2019.type}
            maturing={redKing_2019.maturing}
            alchool={redKing_2019.alchool}
            color={redKing_2019.color}
            qty={redKing_2019.qty}
            grapes={redKing_2019.grapes}
            img={img}
            modalImage={modalImage}
            decantation={redKing_2019.decantation}
        />
    );
};

export default RedKing_2019;
