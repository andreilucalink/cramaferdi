import React from 'react';
import { cuveePitigaia_2018 } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/cuveepitigaia.png';

const CuveePitigaia = () => {
  return (
    <WinePage
      title={cuveePitigaia_2018.title}
      year={cuveePitigaia_2018.year}
      price={cuveePitigaia_2018.price}
      description={cuveePitigaia_2018.description}
      type={cuveePitigaia_2018.type}
      maturing={cuveePitigaia_2018.maturing}
      alchool={cuveePitigaia_2018.alchool}
      color={cuveePitigaia_2018.color}
      qty={cuveePitigaia_2018.qty}
      grapes={cuveePitigaia_2018.grapes}
      img={img}
      decantation={cuveePitigaia_2018.decantation}
    />
  );
};

export default CuveePitigaia;
