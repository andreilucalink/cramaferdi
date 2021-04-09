import React from 'react';
import { misterS_Rezerva } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/MRSR2018.png';
import modalImage from '../../img/etichete/MRSR2018.jpg';

const MisterS_Rezerva = () => {
  return (
    <WinePage
      title={misterS_Rezerva.title}
      year={misterS_Rezerva.year}
      price={misterS_Rezerva.price}
      description={misterS_Rezerva.description}
      type={misterS_Rezerva.type}
      maturing={misterS_Rezerva.maturing}
      alchool={misterS_Rezerva.alchool}
      color={misterS_Rezerva.color}
      qty={misterS_Rezerva.qty}
      grapes={misterS_Rezerva.grapes}
      img={img}
      decantation={misterS_Rezerva.decantation}
      modalImage={modalImage}
    />
  );
};

export default MisterS_Rezerva;
