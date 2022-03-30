import React from "react";
import { ladyBlack_2020 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/LBK2020.jpg";
import modalImage from "../../img/etichete/LBK2020.jpg";

const LadyBlack2020 = () => {
    return (
        <WinePage
            title={ladyBlack_2020.title}
            year={ladyBlack_2020.year}
            price={ladyBlack_2020.price}
            description={ladyBlack_2020.description}
            type={ladyBlack_2020.type}
            maturing={ladyBlack_2020.maturing}
            alchool={ladyBlack_2020.alchool}
            color={ladyBlack_2020.color}
            qty={ladyBlack_2020.qty}
            grapes={ladyBlack_2020.grapes}
            img={img}
            decantation={ladyBlack_2020.decantation}
            modalImage={modalImage}
        />
    );
};

export default LadyBlack2020;
