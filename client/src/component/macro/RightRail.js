import React from 'react';
import CodeBox from './CodeBox';

function RightRail({ className, selectedGradient, styleCSS }) {
  const overrideClass = className || '';

  return (
    <div className={`${overrideClass}`}>
      Gradient name - <span className="capitalize text-xl roboto">{selectedGradient?.name}</span>
      <CodeBox css={styleCSS} />
    </div>
  );
}

export default RightRail;
