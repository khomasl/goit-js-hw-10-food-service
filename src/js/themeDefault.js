import {Theme, themeSwitchToggle, bodyTheme} from './app.js';

export const setThemDefault = () => {
    const theme = localStorage.getItem('theme');

    if ((theme === null) || (theme === Theme.LIGHT)) {
        localStorage.setItem('theme', Theme.LIGHT);
        bodyTheme.classList.add(Theme.LIGHT);
        themeSwitchToggle.checked = false;
    }

    if (theme === Theme.DARK) {
        themeSwitchToggle.checked = true;
        bodyTheme.classList.add(Theme.DARK);
    }  
}