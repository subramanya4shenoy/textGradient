import React from 'react'
import useDarkMode from '../../hooks/useDarkMode';

const ThemeSwitch = () => {
    const [colorTheme, setColorTheme] = useDarkMode();
    return (
        <div>
            <div className='' onClick={() => {setColorTheme(colorTheme)}}> Switch </div>
        </div>
    )
}

export default ThemeSwitch
