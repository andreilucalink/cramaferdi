import React from 'react';
import { madameS_Limited } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/madame_s_limited.png';
import modalImage from '../../img/etichete/MDS2020.png';

const MadameS_Limited = () => {
  return (
    <WinePage
      title={madameS_Limited.title}
      year={madameS_Limited.year}
      price={madameS_Limited.price}
      description={madameS_Limited.description}
      type={madameS_Limited.type}
      maturing={madameS_Limited.maturing}
      alchool={madameS_Limited.alchool}
      color={madameS_Limited.color}
      qty={madameS_Limited.qty}
      grapes={madameS_Limited.grapes}
      img={img}
      decantation={madameS_Limited.decantation}
      modalImage={modalImage}
    />
  );
};

export default MadameS_Limited;
