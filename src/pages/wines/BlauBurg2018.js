import React from 'react';
import { blauBurg2018 } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/BLAUB2018.jpg';
import modalImage from '../../img/etichete/BLAUB2018.jpg';

const BlauBurg2018 = () => {
  return (
    <WinePage
      title={blauBurg2018.title}
      year={blauBurg2018.year}
      price={blauBurg2018.price}
      description={blauBurg2018.description}
      type={blauBurg2018.type}
      maturing={blauBurg2018.maturing}
      alchool={blauBurg2018.alchool}
      color={blauBurg2018.color}
      qty={blauBurg2018.qty}
      grapes={blauBurg2018.grapes}
      img={img}
      decantation={blauBurg2018.decantation}
      modalImage={modalImage}
    />
  );
};

export default BlauBurg2018;
