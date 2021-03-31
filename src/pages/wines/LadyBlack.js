import React from 'react';
import { ladyBlack } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/LBK2019.png';
import modalImage from '../../img/etichete/LBK2019.jpg';

const LadyBlack = () => {
  return (
    <WinePage
      title={ladyBlack.title}
      year={ladyBlack.year}
      price={ladyBlack.price}
      description={ladyBlack.description}
      type={ladyBlack.type}
      maturing={ladyBlack.maturing}
      alchool={ladyBlack.alchool}
      color={ladyBlack.color}
      qty={ladyBlack.qty}
      grapes={ladyBlack.grapes}
      img={img}
      decantation={ladyBlack.decantation}
      modalImage={modalImage}
    />
  );
};

export default LadyBlack;
