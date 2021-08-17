import React from 'react';
import { whiteQueen_Limited } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/WHQ2020.jpg';
import modalImage from '../../img/etichete/WHQ2020.jpg';

const BlauBurg2018 = () => {
  return (
    <WinePage
      title={whiteQueen_Limited.title}
      year={whiteQueen_Limited.year}
      price={whiteQueen_Limited.price}
      description={whiteQueen_Limited.description}
      type={whiteQueen_Limited.type}
      maturing={whiteQueen_Limited.maturing}
      alchool={whiteQueen_Limited.alchool}
      color={whiteQueen_Limited.color}
      qty={whiteQueen_Limited.qty}
      grapes={whiteQueen_Limited.grapes}
      img={img}
      decantation={whiteQueen_Limited.decantation}
      modalImage={modalImage}
    />
  );
};

export default BlauBurg2018;
