import React, { useEffect, useState } from 'react';
// import GradientRunner from '../component/macro/GradientRunner';
import LeftRail from '../component/macro/LeftRail';
import GradientList from '../component/micro/GradientList';
import gradient from '../gardients.json';
import quote from '../quote.json';

function Home() {
  const len = gradient.length;
  const quotelem = quote.length;

  const [selectedGradient, setselectedGradient] = useState();
  const [selectedQuote, setquote] = useState();
  const [styleCSS, setstyleCSS] = useState('');

  const setGradientToText = (grad) => {
    setselectedGradient(grad);
    const cssString = `background-color: ${
      grad.colors[0]
    }; \nbackground-image: linear-gradient(45deg, ${[...grad.colors]});
    \nbackground-size: 100%;
    \n-webkit-background-clip: text;
    \n-moz-background-clip: text;
    \n-webkit-text-fill-color: transparent;
    \n-moz-text-fill-color: transparent;'`;
    setstyleCSS(cssString);
  };

  const shuffleGradient = () => {
    const randomLength = Math.floor(Math.random() * len);
    setGradientToText(gradient[randomLength]);
  };

  const shuffleQuote = () => {
    setquote(quote[Math.floor(Math.random() * quotelem)]);
  };

  useEffect(() => {
    shuffleQuote();
    shuffleGradient();
  }, []);

  return (
    <div className="flex flex-wrap w-full dark:text-white mt-40 overflow-auto">
      {selectedQuote && (
        <LeftRail
          className="w-full self-center"
          selectedGradient={selectedGradient}
          selectedQuote={selectedQuote}
          styleCSS={styleCSS}
          shuffleGradient={() => shuffleGradient()}
          shuffleQuote={() => shuffleQuote()}
        />
      )}
      <div className="mx-24 mobile:mx-10 flex flex-wrap">
        {gradient.map((grad, index) => (
          <GradientList
            // eslint-disable-next-line react/no-array-index-key
            key={`gradient_${index}`}
            gradient={grad}
            setstyleCSS={(e) => {
              setGradientToText(e);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
