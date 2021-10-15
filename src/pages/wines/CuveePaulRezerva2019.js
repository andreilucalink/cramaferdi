import React from "react";
import { cuveePaul_Rezerva } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/CUPR2019.jpg";
import modalImage from "../../img/etichete/CUPR2019.jpg";

const CuveePaulRezerva2019 = () => {
    return (
        <WinePage
            title={cuveePaul_Rezerva.title}
            year={cuveePaul_Rezerva.year}
            price={cuveePaul_Rezerva.price}
            description={cuveePaul_Rezerva.description}
            type={cuveePaul_Rezerva.type}
            maturing={cuveePaul_Rezerva.maturing}
            alchool={cuveePaul_Rezerva.alchool}
            color={cuveePaul_Rezerva.color}
            qty={cuveePaul_Rezerva.qty}
            grapes={cuveePaul_Rezerva.grapes}
            img={img}
            modalImage={modalImage}
            decantation={cuveePaul_Rezerva.decantation}
        />
    );
};

export default CuveePaulRezerva2019;
