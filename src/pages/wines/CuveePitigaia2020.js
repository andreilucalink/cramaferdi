import React from "react";
import { cuveePitigaia_2020 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/CPIT2020.jpg";
import modalImage from "../../img/etichete/CPIT2020.jpg";

const CuveePitigaia2020 = () => {
    return (
        <WinePage
            title={cuveePitigaia_2020.title}
            year={cuveePitigaia_2020.year}
            price={cuveePitigaia_2020.price}
            description={cuveePitigaia_2020.description}
            type={cuveePitigaia_2020.type}
            maturing={cuveePitigaia_2020.maturing}
            alchool={cuveePitigaia_2020.alchool}
            color={cuveePitigaia_2020.color}
            qty={cuveePitigaia_2020.qty}
            grapes={cuveePitigaia_2020.grapes}
            img={img}
            decantation={cuveePitigaia_2020.decantation}
            modalImage={modalImage}
        />
    );
};

export default CuveePitigaia2020;
