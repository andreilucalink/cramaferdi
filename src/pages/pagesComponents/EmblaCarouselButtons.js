import React from 'react';

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
    disabled={!enabled}
  >
    <img
      src={require('../../img/carousel_left.svg')}
      alt='Right'
      className='embla__button__svg'
    />
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className='embla__button embla__button--next'
    onClick={onClick}
    disabled={!enabled}
  >
    <img
      src={require('../../img/carousel_right.svg')}
      alt='Right'
      className='embla__button__svg'
    />
  </button>
);
