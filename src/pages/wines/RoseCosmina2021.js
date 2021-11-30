import React from "react";
import { roseCosmina_2021 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/RC2021.jpg";
import modalImage from "../../img/etichete/RC2021.jpg";

const RoseCosmina2021 = () => {
    return (
        <WinePage
            title={roseCosmina_2021.title}
            year={roseCosmina_2021.year}
            price={roseCosmina_2021.price}
            description={roseCosmina_2021.description}
            type={roseCosmina_2021.type}
            maturing={roseCosmina_2021.maturing}
            alchool={roseCosmina_2021.alchool}
            color={roseCosmina_2021.color}
            qty={roseCosmina_2021.qty}
            grapes={roseCosmina_2021.grapes}
            img={img}
            decantation={roseCosmina_2021.decantation}
            modalImage={modalImage}
        />
    );
};

export default RoseCosmina2021;
