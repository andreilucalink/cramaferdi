import React from "react";
import { misterS_Rezerva_2019 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/MRSR2019.jpg";
import modalImage from "../../img/etichete/MRSR2019.jpg";

const MisterS_Rezerva2019 = () => {
    return (
        <WinePage
            title={misterS_Rezerva_2019.title}
            year={misterS_Rezerva_2019.year}
            price={misterS_Rezerva_2019.price}
            description={misterS_Rezerva_2019.description}
            type={misterS_Rezerva_2019.type}
            maturing={misterS_Rezerva_2019.maturing}
            alchool={misterS_Rezerva_2019.alchool}
            color={misterS_Rezerva_2019.color}
            qty={misterS_Rezerva_2019.qty}
            grapes={misterS_Rezerva_2019.grapes}
            img={img}
            decantation={misterS_Rezerva_2019.decantation}
            modalImage={modalImage}
        />
    );
};

export default MisterS_Rezerva2019;
