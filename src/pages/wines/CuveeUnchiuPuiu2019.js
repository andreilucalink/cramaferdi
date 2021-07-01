import React from 'react';
import { cuveeUnchiu_Puiu2019 } from '../pagesComponents/wineDescriptions';
import WinePage from '../pagesComponents/WinePage';
import img from '../../img/wines/CUNP2019.png';
import modalImage from '../../img/etichete/CUNP2019.jpg';

const CuveeUnchiuPuiu2019 = () => {
  return (
    <WinePage
      title={cuveeUnchiu_Puiu2019.title}
      year={cuveeUnchiu_Puiu2019.year}
      price={cuveeUnchiu_Puiu2019.price}
      description={cuveeUnchiu_Puiu2019.description}
      type={cuveeUnchiu_Puiu2019.type}
      maturing={cuveeUnchiu_Puiu2019.maturing}
      alchool={cuveeUnchiu_Puiu2019.alchool}
      color={cuveeUnchiu_Puiu2019.color}
      qty={cuveeUnchiu_Puiu2019.qty}
      grapes={cuveeUnchiu_Puiu2019.grapes}
      img={img}
      decantation={cuveeUnchiu_Puiu2019.decantation}
      modalImage={modalImage}
      medalImg={cuveeUnchiu_Puiu2019.medalImg}
      medal={cuveeUnchiu_Puiu2019.medal}
    />
  );
};

export default CuveeUnchiuPuiu2019;
