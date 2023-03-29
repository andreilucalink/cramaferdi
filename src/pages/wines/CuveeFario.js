import React from "react";
import { cuvee_Fario } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/CFSE2019.jpg";
import modalImage from "../../img/etichete/CFSE2019.jpg";

const CuveeFario = () => {
    return (
        <WinePage
            title={cuvee_Fario.title}
            year={cuvee_Fario.year}
            price={cuvee_Fario.price}
            description={cuvee_Fario.description}
            type={cuvee_Fario.type}
            maturing={cuvee_Fario.maturing}
            alchool={cuvee_Fario.alchool}
            color={cuvee_Fario.color}
            qty={cuvee_Fario.qty}
            grapes={cuvee_Fario.grapes}
            img={img}
            decantation={cuvee_Fario.decantation}
            modalImage={modalImage}
        />
    );
};

export default CuveeFario;
