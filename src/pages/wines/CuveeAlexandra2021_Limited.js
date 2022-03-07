import React from "react";
import { cuveeAlexandra_2021_limited } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/CALX2021.jpg";
import modalImage from "../../img/etichete/CALX2021.jpg";

const CuveeAlexandra2021_Limited = () => {
    return (
        <WinePage
            title={cuveeAlexandra_2021_limited.title}
            year={cuveeAlexandra_2021_limited.year}
            price={cuveeAlexandra_2021_limited.price}
            description={cuveeAlexandra_2021_limited.description}
            type={cuveeAlexandra_2021_limited.type}
            maturing={cuveeAlexandra_2021_limited.maturing}
            alchool={cuveeAlexandra_2021_limited.alchool}
            color={cuveeAlexandra_2021_limited.color}
            qty={cuveeAlexandra_2021_limited.qty}
            grapes={cuveeAlexandra_2021_limited.grapes}
            img={img}
            decantation={cuveeAlexandra_2021_limited.decantation}
            modalImage={modalImage}
        />
    );
};

export default CuveeAlexandra2021_Limited;
