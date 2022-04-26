import React from "react";
import { cuveeUnchiu_Puiu2020 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/CUNP2020.jpg";
import modalImage from "../../img/etichete/CUNP2020.jpg";

const CuveeUnchiuPuiu2020 = () => {
    return (
        <WinePage
            title={cuveeUnchiu_Puiu2020.title}
            year={cuveeUnchiu_Puiu2020.year}
            price={cuveeUnchiu_Puiu2020.price}
            description={cuveeUnchiu_Puiu2020.description}
            type={cuveeUnchiu_Puiu2020.type}
            maturing={cuveeUnchiu_Puiu2020.maturing}
            alchool={cuveeUnchiu_Puiu2020.alchool}
            color={cuveeUnchiu_Puiu2020.color}
            qty={cuveeUnchiu_Puiu2020.qty}
            grapes={cuveeUnchiu_Puiu2020.grapes}
            img={img}
            decantation={cuveeUnchiu_Puiu2020.decantation}
            modalImage={modalImage}
            medalImg={cuveeUnchiu_Puiu2020.medalImg}
            medal={cuveeUnchiu_Puiu2020.medal}
        />
    );
};

export default CuveeUnchiuPuiu2020;
