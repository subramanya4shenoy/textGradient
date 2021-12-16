import React from 'react'
import ThemeSwitch from '../micro/ThemSwitch'
import bgG from '../../assets/img/bgGradient.png';

function CommonPageDecoration() {
    return (
        <>
        <div className="fixed z-0 top-0 w-screen h-screen left-0 dark:bg-primary translate-y-2 transition ease-in duration-700 ">
         <img className="w-screen h-screen z-20 fixed" src={bgG} alt='' />
        </div>
        <div className="absolute top-0 right-0 z-20">
            <ThemeSwitch />
        </div>
        </>
    )
}

export default CommonPageDecoration
