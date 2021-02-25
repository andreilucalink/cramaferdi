import React from 'react';
import { misterS_Limited } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/mister_s_limited.png';
import modalImage from '../../img/etichete/MRSR2018.png';

const MisterS_Limited = () => {
  return (
    <WinePage
      title={misterS_Limited.title}
      year={misterS_Limited.year}
      price={misterS_Limited.price}
      description={misterS_Limited.description}
      type={misterS_Limited.type}
      maturing={misterS_Limited.maturing}
      alchool={misterS_Limited.alchool}
      color={misterS_Limited.color}
      qty={misterS_Limited.qty}
      grapes={misterS_Limited.grapes}
      img={img}
      decantation={misterS_Limited.decantation}
      modalImage={modalImage}
    />
  );
};

export default MisterS_Limited;
