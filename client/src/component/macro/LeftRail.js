import React from 'react';
import ShuffleButton from '../micro/ShuffleButton';
import TextView from './TextView';

function LeftRail({ className, selectedGradient, selectedQuote, shuffleGradient, shuffleQuote }) {
  const overrideClass = className || '';

  return (
    <div className={` ${overrideClass}`}>
      <TextView
        className="text-4xl leading-relaxed px-10 
            ubuntu transition ease-in duration-700 "
        selectedGradient={selectedGradient}
        randomText={selectedQuote}
      />
      <div className="flex w-full p-10">
        <ShuffleButton text="Shuffle Gradient" handleClick={() => shuffleGradient()} />
        <ShuffleButton text="Shuffle Font" handleClick={() => shuffleQuote()} />
      </div>
    </div>
  );
}

export default LeftRail;
