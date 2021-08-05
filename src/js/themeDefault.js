import {Theme, themeSwitchToggle, bodyTheme} from './app.js';

export const setThemDefault = () => {
    bodyTheme.classList.add(Theme.LIGHT);

    const theme = localStorage.getItem('theme');

    if (theme === Theme.DARK) {
        themeSwitchToggle.checked = true;
        bodyTheme.classList.replace(Theme.LIGHT,Theme.DARK);
    }  
}