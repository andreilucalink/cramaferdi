import React from 'react';
import { cuveePaulPort } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/cuveepaulport.png';

const CuveePaulPort = () => {
  return (
    <WinePage
      title={cuveePaulPort.title}
      year={cuveePaulPort.year}
      price={cuveePaulPort.price}
      description={cuveePaulPort.description}
      type={cuveePaulPort.type}
      maturing={cuveePaulPort.maturing}
      alchool={cuveePaulPort.alchool}
      color={cuveePaulPort.color}
      qty={cuveePaulPort.qty}
      grapes={cuveePaulPort.grapes}
      img={img}
      decantation={cuveePaulPort.decantation}
    />
  );
};

export default CuveePaulPort;
