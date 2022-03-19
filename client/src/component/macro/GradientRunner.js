import React from 'react';
import GradientList from '../micro/GradientList';

function GradientRunner({ gradients, setstyleCSS }) {
  return (
    <div className="flex flex-nowrap mx-10">
      <div className="self-center ml-4">
        <div className="flex flex-wrap">
          {gradients.map((gradient, index) => (
            <GradientList
              // eslint-disable-next-line react/no-array-index-key
              key={`gradient_${index}`}
              gradient={gradient}
              setstyleCSS={(e) => {
                setstyleCSS(e);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GradientRunner;
