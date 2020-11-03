import media1 from './img1.png';
import media2 from './img2.png';
import media3 from './img3.png';
import media4 from './img4.png';
import media5 from './img5.png';

import media1_mobile from './img1_mobile.png';
import media2_mobile from './img2_mobile.png';
import media3_mobile from './img3_mobile.png';
import media4_mobile from './img4_mobile.png';
import media5_mobile from './img5_mobile.png';

export const media = [media1, media2, media3, media4, media5];
export const media_mb = [
  media1_mobile,
  media2_mobile,
  media3_mobile,
  media4_mobile,
  media5_mobile,
];
export const mediaByIndex = (index) => media[index % media.length];
export const mediaByIndexMobile = (index) => media_mb[index % media_mb.length];
