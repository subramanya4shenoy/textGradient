import React from 'react'
import ThemeSwitch from '../micro/ThemSwitch'
import bgG from '../../assets/img/bgGradient.png';
import logo from '../../assets/img/logo.svg';

function CommonPageDecoration() {
    return (
        <>
            <div className='absolute left-0 top-0'>
                <div className='fixed z-20 flex m-5'>
                    <div><img className="w-10 h-10 z-30" src={logo} alt='logo' /></div>
                    <div className='text-primary self-center mx-2 dark:text-white'>Gradient Text</div>
                </div>
            </div>
            <div className="fixed z-0 top-0 w-screen h-screen left-0 dark:bg-primary translate-y-2 transition ease-in duration-700 ">
                <img className="w-screen h-screen z-20 fixed" src={bgG} alt='' />
            </div>
            <div className="absolute top-0 right-0 z-20">
                <ThemeSwitch />
            </div>

            {/* <div className='w-1/2 h-1/2 overflow-visible z-20'>
                <iframe src='https://my.spline.design/noisedisplacecopy-d225e306cbce9953001808f16cc1f798/' frameborder='0' width='240px' height='240px'></iframe>
            </div> */}
        </>
    )
}

export default CommonPageDecoration
