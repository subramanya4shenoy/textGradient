import React from 'react'
import ThemeSwitch from '../micro/ThemSwitch'
import bgG from '../../assets/img/bgGradient.svg';

function CommonPageDecoration() {
    return (
        <>
        <div className="fixed z-0 top-0 left-0">
        <img className="w-screen z-0 fixed" src={bgG} alt='' />
        </div>
        <div className="absolute top-0 right-0 z-20">
            <ThemeSwitch />
        </div>
        </>
    )
}

export default CommonPageDecoration
