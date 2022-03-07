import React from "react";
import { madameS_2021_limited } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/MADS2021.jpg";
import modalImage from "../../img/etichete/MADS2021.jpg";

const MadameS2021_Limited = () => {
    return (
        <WinePage
            title={madameS_2021_limited.title}
            year={madameS_2021_limited.year}
            price={madameS_2021_limited.price}
            description={madameS_2021_limited.description}
            type={madameS_2021_limited.type}
            maturing={madameS_2021_limited.maturing}
            alchool={madameS_2021_limited.alchool}
            color={madameS_2021_limited.color}
            qty={madameS_2021_limited.qty}
            grapes={madameS_2021_limited.grapes}
            img={img}
            decantation={madameS_2021_limited.decantation}
            modalImage={modalImage}
        />
    );
};

export default MadameS2021_Limited;
