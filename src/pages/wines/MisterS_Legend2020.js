import React from "react";
import { misterS_Legend_2020 } from "../pagesComponents/wineDescriptions";
import WinePage from "../pagesComponents/WinePage";
import img from "../../img/wines/MRSL2020.jpg";
// import modalImage from "../../img/etichete/MRSR2019.jpg";

const MisterS_Legend2020 = () => {
    return (
        <WinePage
            title={misterS_Legend_2020.title}
            year={misterS_Legend_2020.year}
            price={misterS_Legend_2020.price}
            description={misterS_Legend_2020.description}
            type={misterS_Legend_2020.type}
            maturing={misterS_Legend_2020.maturing}
            alchool={misterS_Legend_2020.alchool}
            color={misterS_Legend_2020.color}
            qty={misterS_Legend_2020.qty}
            grapes={misterS_Legend_2020.grapes}
            img={img}
            decantation={misterS_Legend_2020.decantation}
        />
    );
};

export default MisterS_Legend2020;
