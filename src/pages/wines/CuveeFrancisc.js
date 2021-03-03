import React from 'react';
import { cuveeFrancisc_2018 } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/CFR2018.png';
import modalImage from '../../img/etichete/CFR2018.png';

const CuveeFrancisc = () => {
  return (
    <WinePage
      title={cuveeFrancisc_2018.title}
      year={cuveeFrancisc_2018.year}
      price={cuveeFrancisc_2018.price}
      description={cuveeFrancisc_2018.description}
      type={cuveeFrancisc_2018.type}
      maturing={cuveeFrancisc_2018.maturing}
      alchool={cuveeFrancisc_2018.alchool}
      color={cuveeFrancisc_2018.color}
      qty={cuveeFrancisc_2018.qty}
      grapes={cuveeFrancisc_2018.grapes}
      img={img}
      decantation={cuveeFrancisc_2018.decantation}
      modalImage={modalImage}
    />
  );
};

export default CuveeFrancisc;
