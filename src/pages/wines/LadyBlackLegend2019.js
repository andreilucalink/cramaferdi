import React from "react";
import { ladyBlack_legend_2019 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/LBKL2019.jpg";
import modalImage from "../../img/etichete/LBKL2019.jpg";

const LadyBlackLegend2019 = () => {
    return (
        <WinePage
            title={ladyBlack_legend_2019.title}
            year={ladyBlack_legend_2019.year}
            price={ladyBlack_legend_2019.price}
            description={ladyBlack_legend_2019.description}
            type={ladyBlack_legend_2019.type}
            maturing={ladyBlack_legend_2019.maturing}
            alchool={ladyBlack_legend_2019.alchool}
            color={ladyBlack_legend_2019.color}
            qty={ladyBlack_legend_2019.qty}
            grapes={ladyBlack_legend_2019.grapes}
            img={img}
            decantation={ladyBlack_legend_2019.decantation}
            modalImage={modalImage}
        />
    );
};

export default LadyBlackLegend2019;
