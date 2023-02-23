import React from "react";
import { cuveeUnchiu_Puiu2021 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/CUNP2020.jpg";
import modalImage from "../../img/etichete/CUNP2020.jpg";

const CuveeUnchiuPuiu2021 = () => {
    return (
        <WinePage
            title={cuveeUnchiu_Puiu2021.title}
            year={cuveeUnchiu_Puiu2021.year}
            price={cuveeUnchiu_Puiu2021.price}
            description={cuveeUnchiu_Puiu2021.description}
            type={cuveeUnchiu_Puiu2021.type}
            maturing={cuveeUnchiu_Puiu2021.maturing}
            alchool={cuveeUnchiu_Puiu2021.alchool}
            color={cuveeUnchiu_Puiu2021.color}
            qty={cuveeUnchiu_Puiu2021.qty}
            grapes={cuveeUnchiu_Puiu2021.grapes}
            img={img}
            decantation={cuveeUnchiu_Puiu2021.decantation}
            modalImage={modalImage}
            medalImg={cuveeUnchiu_Puiu2021.medalImg}
            medal={cuveeUnchiu_Puiu2021.medal}
        />
    );
};

export default CuveeUnchiuPuiu2021;
