import { useEffect, useState } from 'react'

function useDarkMode() {
    const [theme, settheme] = useState('dark');
    const colorTheme = (theme === 'dark') ? 'light' : 'dark';
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
    }, [theme]);

    return [colorTheme, settheme]
}

export default useDarkMode
