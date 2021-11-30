import React from "react";
import { cuveeAlexandra_2021 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/CALX2021.jpg";
import modalImage from "../../img/etichete/CALX2021.jpg";

const CuveeAlexandra2021 = () => {
    return (
        <WinePage
            title={cuveeAlexandra_2021.title}
            year={cuveeAlexandra_2021.year}
            price={cuveeAlexandra_2021.price}
            description={cuveeAlexandra_2021.description}
            type={cuveeAlexandra_2021.type}
            maturing={cuveeAlexandra_2021.maturing}
            alchool={cuveeAlexandra_2021.alchool}
            color={cuveeAlexandra_2021.color}
            qty={cuveeAlexandra_2021.qty}
            grapes={cuveeAlexandra_2021.grapes}
            img={img}
            decantation={cuveeAlexandra_2021.decantation}
            modalImage={modalImage}
        />
    );
};

export default CuveeAlexandra2021;
