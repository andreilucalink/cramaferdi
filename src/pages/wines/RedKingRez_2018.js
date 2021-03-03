import React from 'react';
import { redKingRez_2018 } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/RKR2018.png';
import modalImage from '../../img/etichete/RKR2018.png';

const RedKingRez_2018 = () => {
  return (
    <WinePage
      title={redKingRez_2018.title}
      year={redKingRez_2018.year}
      price={redKingRez_2018.price}
      description={redKingRez_2018.description}
      type={redKingRez_2018.type}
      maturing={redKingRez_2018.maturing}
      alchool={redKingRez_2018.alchool}
      color={redKingRez_2018.color}
      qty={redKingRez_2018.qty}
      grapes={redKingRez_2018.grapes}
      img={img}
      decantation={redKingRez_2018.decantation}
      modalImage={modalImage}
    />
  );
};

export default RedKingRez_2018;
