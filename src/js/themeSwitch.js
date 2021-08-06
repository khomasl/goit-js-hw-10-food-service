import { Theme } from './theme.js';
import { bodyTheme } from './refs.js';

export const onThemeSwitch = () => {
    const theme = localStorage.getItem('theme');

    if (theme === Theme.DARK) {
        localStorage.setItem('theme', Theme.LIGHT);
        bodyTheme.classList.replace(Theme.DARK,Theme.LIGHT);
    } else {
        localStorage.setItem('theme', Theme.DARK);
        bodyTheme.classList.replace(Theme.LIGHT, Theme.DARK);
    }
}    
