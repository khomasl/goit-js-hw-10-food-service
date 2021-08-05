import { setThemDefault } from './themeDefault.js';
import { onThemeSwitch }  from './themeSwitch.js';
import { markup }         from './markup.js';

export const Theme = {
    LIGHT: "light-theme",
    DARK : "dark-theme"
};
// зміна теми
export const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
export const bodyTheme = document.querySelector('body');

setThemDefault();

themeSwitchToggle.addEventListener('change', onThemeSwitch);
// створюємо розмітку
const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('beforeend', markup);

