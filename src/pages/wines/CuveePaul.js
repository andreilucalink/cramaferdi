import React from 'react';
import { cuveePaul } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/cuveepaul.png';

const CuveePaul = () => {
  return (
    <WinePage
      title={cuveePaul.title}
      year={cuveePaul.year}
      price={cuveePaul.price}
      description={cuveePaul.description}
      type={cuveePaul.type}
      maturing={cuveePaul.maturing}
      alchool={cuveePaul.alchool}
      color={cuveePaul.color}
      qty={cuveePaul.qty}
      grapes={cuveePaul.grapes}
      img={img}
      decantation={cuveePaul.decantation}
    />
  );
};

export default CuveePaul;
