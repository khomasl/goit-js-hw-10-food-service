import {Theme} from './theme';
import { themeSwitchToggle, bodyTheme} from './refs.js';

export const setThemeDefault = () => {
    const theme = localStorage.getItem('theme');

    if (theme === Theme.DARK) {
        themeSwitchToggle.checked = true;
        bodyTheme.classList.add(Theme.DARK);
    } else {
        bodyTheme.classList.add(Theme.LIGHT);
    }
}