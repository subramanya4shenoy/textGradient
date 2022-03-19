import React from 'react';
import ShuffleButton from '../micro/ShuffleButton';
import TextView from './TextView';

function LeftRail({
  className,
  selectedGradient,
  selectedQuote,
  shuffleGradient,
  shuffleQuote,
  styleCSS,
}) {
  const overrideClass = className || '';

  return (
    <div className={` ${overrideClass}`}>
      <TextView
        className="text-4xl leading-relaxed px-10 
            ubuntu transition ease-in duration-700 text-center sticky top-0 "
        selectedGradient={selectedGradient}
        randomText={selectedQuote}
      />
      <div className="align-bottom desktop:flex justify-center p-10 w-full">
        <ShuffleButton
          text="Shuffle Gradient"
          shouldShowIcon
          handleClick={() => shuffleGradient()}
        />
        <ShuffleButton text="Shuffle Text" shouldShowIcon handleClick={() => shuffleQuote()} />
        <ShuffleButton
          text="Copy CSS"
          shouldShowIcon={false}
          handleClick={() => navigator.clipboard.writeText(styleCSS)}
        />
      </div>
    </div>
  );
}

export default LeftRail;
