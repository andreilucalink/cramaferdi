import React from 'react';
import { cuveeFrancisc_2019 } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/CFR2019.jpg';

const CuveeFrancisc2019 = () => {
  return (
    <WinePage
      title={cuveeFrancisc_2019.title}
      year={cuveeFrancisc_2019.year}
      price={cuveeFrancisc_2019.price}
      description={cuveeFrancisc_2019.description}
      type={cuveeFrancisc_2019.type}
      maturing={cuveeFrancisc_2019.maturing}
      alchool={cuveeFrancisc_2019.alchool}
      color={cuveeFrancisc_2019.color}
      qty={cuveeFrancisc_2019.qty}
      grapes={cuveeFrancisc_2019.grapes}
      img={img}
      decantation={cuveeFrancisc_2019.decantation}
      modalImage={null}
    />
  );
};

export default CuveeFrancisc2019;
