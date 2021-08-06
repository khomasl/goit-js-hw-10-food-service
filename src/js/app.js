import { setThemeDefault }   from './themeDefault.js';
import { onThemeSwitch }     from './themeSwitch.js';
import { markup }            from './markup.js';
import { themeSwitchToggle } from './refs.js';
// зміна теми
setThemeDefault();
themeSwitchToggle.addEventListener('change', onThemeSwitch);
// створюємо розмітку
const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('beforeend', markup);

