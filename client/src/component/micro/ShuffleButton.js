import React from 'react';
import shuffle from '../../assets/img/shuffle.svg';

function ShuffleButton({ text, handleClick }) {
  return (
    <div
      className="flex mx-2 ubuntu dark:text-white light:text-secondary 
      rounded dark:hover:bg-secondary border-secondary border cursor-pointer p-2 "
      onClick={() => {
        handleClick();
      }}
      role="presentation"
    >
      <div className="self-center mr-2 h-6">
        <img className="h-6 w-6" src={shuffle} alt="shuffle" />
      </div>
      <div className="self-center mr-2">{text}</div>
    </div>
  );
}

export default ShuffleButton;
