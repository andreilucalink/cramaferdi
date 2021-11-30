import React from "react";
import { cuveePitigaia_2019 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/CPIT2019.jpg";
import modalImage from "../../img/etichete/CPIT2019.jpg";

const CuveePitigaia2019 = () => {
    return (
        <WinePage
            title={cuveePitigaia_2019.title}
            year={cuveePitigaia_2019.year}
            price={cuveePitigaia_2019.price}
            description={cuveePitigaia_2019.description}
            type={cuveePitigaia_2019.type}
            maturing={cuveePitigaia_2019.maturing}
            alchool={cuveePitigaia_2019.alchool}
            color={cuveePitigaia_2019.color}
            qty={cuveePitigaia_2019.qty}
            grapes={cuveePitigaia_2019.grapes}
            img={img}
            decantation={cuveePitigaia_2019.decantation}
            modalImage={modalImage}
        />
    );
};

export default CuveePitigaia2019;
