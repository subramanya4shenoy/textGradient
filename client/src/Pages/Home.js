import React, { useEffect, useState } from 'react'
import GradientRunner from '../component/macro/GradientRunner';
import LeftRail from '../component/macro/LeftRail';
import RightRail from '../component/macro/RightRail';
import gradient from '../gardients.json';
import quote from '../quote.json';

function Home() {

    let len = gradient.length;
    let quotelem = quote.length;

    const [selectedGradient, setselectedGradient] = useState()
    const [selectedQuote, setquote] = useState()
    const [styleCSS, setstyleCSS] = useState('');

    const shuffleGradient = () => {
        let randomLength = Math.floor(Math.random() * len);
        setGradientToText(gradient[randomLength])
    }

    const setGradientToText = (gradient) => {
        setselectedGradient(gradient);
        let cssString = "background-color: " + gradient.colors[0] + "; \nbackground-image: linear-gradient(45deg, " + [...gradient.colors] + ");\nbackground-size: 100%;\n-webkit-background-clip: text;\n-moz-background-clip: text;\n-webkit-text-fill-color: transparent;\n-moz-text-fill-color: transparent;'"
        setstyleCSS(cssString);
    }

    const shuffleQuote = () => { setquote(quote[Math.floor(Math.random() * quotelem)]); }

    useEffect(() => {
        shuffleQuote();
        shuffleGradient();
    }, [])

    return (
        <div className='desktop:max-w-6xl w-screen desktop:mx-auto'>

            <div className='flex flex-wrap w-full dark:text-white mt-40'>
                {(selectedQuote) &&
                    (<LeftRail className='w-full self-center' selectedGradient={selectedGradient}
                        selectedQuote={selectedQuote}
                        shuffleGradient={() => shuffleGradient()}
                        shuffleQuote={() => shuffleQuote()} />
                    )}

                <RightRail className="w-full self-center desktop:ml-10"
                    selectedGradient={selectedGradient}
                    styleCSS={styleCSS} />

            </div>

            <div className='absolute w-full mt-24 left-0'>
                <GradientRunner gradients={gradient} setstyleCSS={(e) => {setGradientToText(e)}}/>
            </div>

        </div>
    )
}

export default Home
