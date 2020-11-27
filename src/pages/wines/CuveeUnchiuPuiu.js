import React from 'react';
import { cuveeUPuiu } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/unchiupuiu.png';

const CuveeUnchiuPuiu = () => {
  return (
    <WinePage
      title={cuveeUPuiu.title}
      year={cuveeUPuiu.year}
      price={cuveeUPuiu.price}
      description={cuveeUPuiu.description}
      type={cuveeUPuiu.type}
      maturing={cuveeUPuiu.maturing}
      alchool={cuveeUPuiu.alchool}
      color={cuveeUPuiu.color}
      qty={cuveeUPuiu.qty}
      grapes={cuveeUPuiu.grapes}
      img={img}
      decantation={cuveeUPuiu.decantation}
    />
  );
};

export default CuveeUnchiuPuiu;
