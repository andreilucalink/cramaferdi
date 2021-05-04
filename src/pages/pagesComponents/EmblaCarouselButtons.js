import React from 'react';
// Images
import left from '../../img/carousel_left.svg';
import right from '../../img/carousel_right.svg';

export const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? 'is-selected' : ''}`}
    type='button'
    onClick={onClick}
  />
);

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className='embla__button embla__button--prev'
    onClick={onClick}
    disabled={!enabled}>
    <img src={left} alt='Right' className='embla__button__svg' />
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className='embla__button embla__button--next'
    onClick={onClick}
    disabled={!enabled}>
    <img src={right} alt='Right' className='embla__button__svg' />
  </button>
);
