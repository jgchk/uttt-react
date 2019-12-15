const themes = {
    neon: {
        '--p1': '#41EAD4',
        '--p2': '#FF0022',
        '--tie': '#DDD',
        '--bkg': '#FDFFFC'
    }
};

export function applyTheme(themeName) {
    const theme = themes[themeName];
    Object.keys(theme).forEach(key => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value);
    });
}