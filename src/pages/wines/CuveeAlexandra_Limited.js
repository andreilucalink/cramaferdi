import React from 'react';
import { cuveeAlexandra_Limited } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/cuvee_alexandra_limited.png';
import modalImage from '../../img/etichete/CALX2020.jpg';

const CuveeAlexandra_Limited = () => {
  return (
    <WinePage
      title={cuveeAlexandra_Limited.title}
      year={cuveeAlexandra_Limited.year}
      price={cuveeAlexandra_Limited.price}
      description={cuveeAlexandra_Limited.description}
      type={cuveeAlexandra_Limited.type}
      maturing={cuveeAlexandra_Limited.maturing}
      alchool={cuveeAlexandra_Limited.alchool}
      color={cuveeAlexandra_Limited.color}
      qty={cuveeAlexandra_Limited.qty}
      grapes={cuveeAlexandra_Limited.grapes}
      img={img}
      decantation={cuveeAlexandra_Limited.decantation}
      modalImage={modalImage}
    />
  );
};

export default CuveeAlexandra_Limited;
