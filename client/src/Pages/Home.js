import React, { useEffect, useState } from 'react';
import GradientRunner from '../component/macro/GradientRunner';
import LeftRail from '../component/macro/LeftRail';
import RightRail from '../component/macro/RightRail';
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
    <div className="desktop:max-w-6xl w-screen desktop:mx-auto">
      <div className="flex flex-wrap w-full dark:text-white mt-40">
        {selectedQuote && (
          <LeftRail
            className="w-full self-center"
            selectedGradient={selectedGradient}
            selectedQuote={selectedQuote}
            shuffleGradient={() => shuffleGradient()}
            shuffleQuote={() => shuffleQuote()}
          />
        )}

        <RightRail
          className="w-full self-center desktop:ml-10"
          selectedGradient={selectedGradient}
          styleCSS={styleCSS}
        />
      </div>

      <div className="absolute w-full mt-24 left-0">
        <GradientRunner
          gradients={gradient}
          setstyleCSS={(e) => {
            setGradientToText(e);
          }}
        />
      </div>
    </div>
  );
}

export default Home;
