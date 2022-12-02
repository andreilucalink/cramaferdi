import React from "react";
import { roseCosmina_2022 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/RC2022.jpg";
// import modalImage from "../../img/etichete/RC2021.jpg";

const RoseCosmina2022_Limited = () => {
    return (
        <WinePage
            title={roseCosmina_2022.title}
            year={roseCosmina_2022.year}
            price={roseCosmina_2022.price}
            description={roseCosmina_2022.description}
            type={roseCosmina_2022.type}
            maturing={roseCosmina_2022.maturing}
            alchool={roseCosmina_2022.alchool}
            color={roseCosmina_2022.color}
            qty={roseCosmina_2022.qty}
            grapes={roseCosmina_2022.grapes}
            img={img}
            decantation={roseCosmina_2022.decantation}
            // modalImage={modalImage}
        />
    );
};

export default RoseCosmina2022_Limited;
