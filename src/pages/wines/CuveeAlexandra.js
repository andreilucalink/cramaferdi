import React from 'react';
import { cuveeAlexandra } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/CALX2020.png';
import modalImage from '../../img/etichete/CALX2020.jpg';

const CuveeAlexandra = () => {
  return (
    <WinePage
      title={cuveeAlexandra.title}
      year={cuveeAlexandra.year}
      price={cuveeAlexandra.price}
      description={cuveeAlexandra.description}
      type={cuveeAlexandra.type}
      maturing={cuveeAlexandra.maturing}
      alchool={cuveeAlexandra.alchool}
      color={cuveeAlexandra.color}
      qty={cuveeAlexandra.qty}
      grapes={cuveeAlexandra.grapes}
      img={img}
      decantation={cuveeAlexandra.decantation}
      modalImage={modalImage}
    />
  );
};

export default CuveeAlexandra;
