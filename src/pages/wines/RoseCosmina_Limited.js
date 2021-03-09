import React from 'react';
import { roseCosmina_Limited } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/RC2020.png';
import modalImage from '../../img/etichete/RC2020.jpg';

const RoseCosmina_Limited = () => {
  return (
    <WinePage
      title={roseCosmina_Limited.title}
      year={roseCosmina_Limited.year}
      price={roseCosmina_Limited.price}
      description={roseCosmina_Limited.description}
      type={roseCosmina_Limited.type}
      maturing={roseCosmina_Limited.maturing}
      alchool={roseCosmina_Limited.alchool}
      color={roseCosmina_Limited.color}
      qty={roseCosmina_Limited.qty}
      grapes={roseCosmina_Limited.grapes}
      img={img}
      decantation={roseCosmina_Limited.decantation}
      modalImage={modalImage}
    />
  );
};

export default RoseCosmina_Limited;
