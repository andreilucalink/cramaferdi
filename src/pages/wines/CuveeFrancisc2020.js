import React from "react";
import { cuveeFrancisc_2020 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/CFR2020.jpg";
import modalImage from "../../img/etichete/CFR2020.jpg";

const CuveeFrancisc2020 = () => {
    return (
        <WinePage
            title={cuveeFrancisc_2020.title}
            year={cuveeFrancisc_2020.year}
            price={cuveeFrancisc_2020.price}
            description={cuveeFrancisc_2020.description}
            type={cuveeFrancisc_2020.type}
            maturing={cuveeFrancisc_2020.maturing}
            alchool={cuveeFrancisc_2020.alchool}
            color={cuveeFrancisc_2020.color}
            qty={cuveeFrancisc_2020.qty}
            grapes={cuveeFrancisc_2020.grapes}
            img={img}
            decantation={cuveeFrancisc_2020.decantation}
            modalImage={modalImage}
        />
    );
};

export default CuveeFrancisc2020;
