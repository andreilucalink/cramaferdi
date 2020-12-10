import React from 'react';
import { cuveeFerdi_Unique } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/cuvee_ferdi_unique.png';

const CuveeFerdi_Unique = () => {
  return (
    <WinePage
      title={cuveeFerdi_Unique.title}
      year={cuveeFerdi_Unique.year}
      price={cuveeFerdi_Unique.price}
      description={cuveeFerdi_Unique.description}
      type={cuveeFerdi_Unique.type}
      maturing={cuveeFerdi_Unique.maturing}
      alchool={cuveeFerdi_Unique.alchool}
      color={cuveeFerdi_Unique.color}
      qty={cuveeFerdi_Unique.qty}
      grapes={cuveeFerdi_Unique.grapes}
      img={img}
      decantation={cuveeFerdi_Unique.decantation}
    />
  );
};

export default CuveeFerdi_Unique;
