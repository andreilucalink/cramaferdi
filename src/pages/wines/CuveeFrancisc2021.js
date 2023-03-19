import React from "react";
import { cuveeFrancisc_2021 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/CFR2021.jpg";
import modalImage from "../../img/etichete/CFR2021.jpg";

const CuveeFrancisc2021 = () => {
    return (
        <WinePage
            title={cuveeFrancisc_2021.title}
            year={cuveeFrancisc_2021.year}
            price={cuveeFrancisc_2021.price}
            description={cuveeFrancisc_2021.description}
            type={cuveeFrancisc_2021.type}
            maturing={cuveeFrancisc_2021.maturing}
            alchool={cuveeFrancisc_2021.alchool}
            color={cuveeFrancisc_2021.color}
            qty={cuveeFrancisc_2021.qty}
            grapes={cuveeFrancisc_2021.grapes}
            img={img}
            decantation={cuveeFrancisc_2021.decantation}
            modalImage={modalImage}
        />
    );
};

export default CuveeFrancisc2021;
