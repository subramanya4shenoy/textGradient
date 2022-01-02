import React, { useEffect, useState } from 'react'
import CodeBox from '../component/macro/CodeBox';
import LeftRail from '../component/macro/LeftRail';
import RightRail from '../component/macro/RightRail';
import TextView from '../component/macro/TextView'
import ShuffleButton from '../component/micro/ShuffleButton';
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
        setselectedGradient(gradient[randomLength]);
        console.log(gradient[randomLength]);
        let cssString = "background-color: " + gradient[randomLength].colors[0] + "; \nbackground-image: linear-gradient(45deg, " + [...gradient[randomLength].colors] + ");\nbackground-size: 100%;\n-webkit-background-clip: text;\n-moz-background-clip: text;\n-webkit-text-fill-color: transparent;\n-moz-text-fill-color: transparent;'"
        setstyleCSS(cssString);
    }

    const shuffleQuote = () => { setquote(quote[Math.floor(Math.random() * quotelem)]); }

    useEffect(() => {
        shuffleQuote();
        shuffleGradient();
    }, [])

    return (
        <div className='desktop:max-w-6xl w-screen desktop:mx-auto'>

            <div className='w-full'>
                gardient selection
            </div>

            <div className='flex flex-nowrap w-full h-screen dark:text-white'>
                {(selectedQuote) &&
                    (<LeftRail className='w-1/2 self-center' selectedGradient={selectedGradient}
                        selectedQuote={selectedQuote}
                        shuffleGradient={() => shuffleGradient()}
                        shuffleQuote={() => shuffleQuote()} />
                    )}

                <RightRail className="w-1/2 self-center desktop:ml-10"
                    selectedGradient={selectedGradient}
                    styleCSS={styleCSS}
                />

            </div>

        </div>
    )
}

export default Home
