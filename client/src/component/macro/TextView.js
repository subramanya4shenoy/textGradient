import React, { useEffect, useState } from 'react';

function TextView({ className, selectedGradient, randomText }) {
  const [gradientStyle, setgradientStyle] = useState({});

  useEffect(() => {
    setgradientStyle({
      backgroundColor: selectedGradient.colors[0],
      backgroundImage: `linear-gradient(45deg, ${  selectedGradient.colors.join(', ')  })`,
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      MozTextFillColor: 'transparent',
    });
  }, [selectedGradient]);

  const overrideClass = className || '';

  return (
    <div className={overrideClass} style={gradientStyle}>
      {randomText}
    </div>
  );
}

export default TextView;
