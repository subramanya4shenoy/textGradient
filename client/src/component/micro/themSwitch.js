import React from 'react'
import useThemeSwitch from '../../hooks/useDarkMode';
import sunMoon from '../../assets/img/sunMoon.svg';
const ThemeSwitch = () => {
    const [colorTheme, setColorTheme] = useThemeSwitch();
    return (
        <div>
            <div className="w-8 h-8 relative cursor-pointer overflow-hidden rounded-full m-5 bg-primary dark:bg-white hover:shadow-2xl" onClick={() => {setColorTheme(colorTheme)}}>
                <div className='h-full left-0 overflow-hidden relative top-0'>
                    <img className={'absolute scale-150 transform translate-x-1/2 translate-y-2.5 transition ease-in duration-700 ' + ((colorTheme !== 'dark') ? 'rotate-180' : '')} src={sunMoon} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default ThemeSwitch
