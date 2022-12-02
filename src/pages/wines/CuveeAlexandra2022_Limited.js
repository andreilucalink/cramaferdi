import React from "react";
import { cuveeAlexandra_2022_limited } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/CALX2022.jpg";
// import modalImage from "../../img/etichete/CALX2021.jpg";

const CuveeAlexandra2022_Limited = () => {
    return (
        <WinePage
            title={cuveeAlexandra_2022_limited.title}
            year={cuveeAlexandra_2022_limited.year}
            price={cuveeAlexandra_2022_limited.price}
            description={cuveeAlexandra_2022_limited.description}
            type={cuveeAlexandra_2022_limited.type}
            maturing={cuveeAlexandra_2022_limited.maturing}
            alchool={cuveeAlexandra_2022_limited.alchool}
            color={cuveeAlexandra_2022_limited.color}
            qty={cuveeAlexandra_2022_limited.qty}
            grapes={cuveeAlexandra_2022_limited.grapes}
            img={img}
            decantation={cuveeAlexandra_2022_limited.decantation}
            // modalImage={modalImage}
        />
    );
};

export default CuveeAlexandra2022_Limited;
