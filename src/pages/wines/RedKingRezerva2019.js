import React from "react";
import { redKing_Rezerva2019 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/RKR2019.jpg";
import modalImage from "../../img/etichete/RKR2019.jpg";

const RedKingRezerva2019 = () => {
    return (
        <WinePage
            title={redKing_Rezerva2019.title}
            year={redKing_Rezerva2019.year}
            price={redKing_Rezerva2019.price}
            description={redKing_Rezerva2019.description}
            type={redKing_Rezerva2019.type}
            maturing={redKing_Rezerva2019.maturing}
            alchool={redKing_Rezerva2019.alchool}
            color={redKing_Rezerva2019.color}
            qty={redKing_Rezerva2019.qty}
            grapes={redKing_Rezerva2019.grapes}
            img={img}
            modalImage={modalImage}
            decantation={redKing_Rezerva2019.decantation}
        />
    );
};

export default RedKingRezerva2019;
