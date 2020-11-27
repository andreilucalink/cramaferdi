import React from 'react';
import { misterM_Rezerva } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/mister_m_rezerva.png';

const MisterMRezerva = () => {
  return (
    <WinePage
      title={misterM_Rezerva.title}
      year={misterM_Rezerva.year}
      price={misterM_Rezerva.price}
      description={misterM_Rezerva.description}
      type={misterM_Rezerva.type}
      maturing={misterM_Rezerva.maturing}
      alchool={misterM_Rezerva.alchool}
      color={misterM_Rezerva.color}
      qty={misterM_Rezerva.qty}
      grapes={misterM_Rezerva.grapes}
      img={img}
      decantation={misterM_Rezerva.decantation}
    />
  );
};

export default MisterMRezerva;
