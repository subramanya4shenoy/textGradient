import React from 'react';

function GradientList({ gradient, setstyleCSS }) {
  return (
    <div
      className="h-6 w-6 rounded-full m-2 cursor-pointer"
      onClick={() => {
        setstyleCSS(gradient);
      }}
      role="presentation"
      style={{
        background: `linear-gradient(45deg, ${[...gradient.colors]} 100%)`,
      }}
    />
  );
}

export default GradientList;
