import { useEffect, useState } from 'react'

function useThemeSwitch() {
    const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');
    const colorTheme = (theme === 'dark') ? 'light' : 'dark';
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        localStorage.setItem('theme', theme)
        root.classList.add(theme);
    }, [theme]);

    return [colorTheme, settheme]
}

export default useThemeSwitch
