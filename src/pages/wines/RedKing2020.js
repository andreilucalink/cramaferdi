import React from "react";
import { redKing_2020 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/RK2020.jpg";
import modalImage from "../../img/etichete/RK2020.jpg";

const RedKing2020 = () => {
    return (
        <WinePage
            title={redKing_2020.title}
            year={redKing_2020.year}
            price={redKing_2020.price}
            description={redKing_2020.description}
            type={redKing_2020.type}
            maturing={redKing_2020.maturing}
            alchool={redKing_2020.alchool}
            color={redKing_2020.color}
            qty={redKing_2020.qty}
            grapes={redKing_2020.grapes}
            img={img}
            modalImage={modalImage}
            decantation={redKing_2020.decantation}
        />
    );
};

export default RedKing2020;
