import React from 'react';

function GradientList({ gradient, setstyleCSS }) {
  return (
    <div
      className="h-3 w-3 rounded-full m-2 cursor-pointer flex"
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
