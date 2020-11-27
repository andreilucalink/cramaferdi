import React from 'react';
import { cuveeFrancisc } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/cuveefrancisc.png';

const CuveeFrancisc = () => {
  return (
    <WinePage
      title={cuveeFrancisc.title}
      year={cuveeFrancisc.year}
      price={cuveeFrancisc.price}
      description={cuveeFrancisc.description}
      type={cuveeFrancisc.type}
      maturing={cuveeFrancisc.maturing}
      alchool={cuveeFrancisc.alchool}
      color={cuveeFrancisc.color}
      qty={cuveeFrancisc.qty}
      grapes={cuveeFrancisc.grapes}
      img={img}
      decantation={cuveeFrancisc.decantation}
    />
  );
};

export default CuveeFrancisc;
