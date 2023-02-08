import React from "react";
import { misterM_2020_legend } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/MRML2020.jpg";
// import modalImage from "../../img/etichete/MRS2018.png";

const MisterM_Legend_2020 = () => {
    return (
        <WinePage
            title={misterM_2020_legend.title}
            year={misterM_2020_legend.year}
            price={misterM_2020_legend.price}
            description={misterM_2020_legend.description}
            type={misterM_2020_legend.type}
            maturing={misterM_2020_legend.maturing}
            alchool={misterM_2020_legend.alchool}
            color={misterM_2020_legend.color}
            qty={misterM_2020_legend.qty}
            grapes={misterM_2020_legend.grapes}
            img={img}
            decantation={misterM_2020_legend.decantation}
            // modalImage={modalImage}
        />
    );
};

export default MisterM_Legend_2020;
