import React from "react";
import { madameS_2022_limited } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/MADS2021.jpg";
import modalImage from "../../img/etichete/MADS2021.jpg";

const MadameS2022_Limited = () => {
    return (
        <WinePage
            title={madameS_2022_limited.title}
            year={madameS_2022_limited.year}
            price={madameS_2022_limited.price}
            description={madameS_2022_limited.description}
            type={madameS_2022_limited.type}
            maturing={madameS_2022_limited.maturing}
            alchool={madameS_2022_limited.alchool}
            color={madameS_2022_limited.color}
            qty={madameS_2022_limited.qty}
            grapes={madameS_2022_limited.grapes}
            img={img}
            decantation={madameS_2022_limited.decantation}
            modalImage={modalImage}
        />
    );
};

export default MadameS2022_Limited;
