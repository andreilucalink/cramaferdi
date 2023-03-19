import React from "react";
import { ladyBlack_2021 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/LBK2021.jpg";
import modalImage from "../../img/etichete/LBK2021.jpg";

const LadyBlack2021 = () => {
    return (
        <WinePage
            title={ladyBlack_2021.title}
            year={ladyBlack_2021.year}
            price={ladyBlack_2021.price}
            description={ladyBlack_2021.description}
            type={ladyBlack_2021.type}
            maturing={ladyBlack_2021.maturing}
            alchool={ladyBlack_2021.alchool}
            color={ladyBlack_2021.color}
            qty={ladyBlack_2021.qty}
            grapes={ladyBlack_2021.grapes}
            img={img}
            decantation={ladyBlack_2021.decantation}
            modalImage={modalImage}
        />
    );
};

export default LadyBlack2021;
