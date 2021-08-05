
import menuTemplate from '../templates/menu.hbs';
import menuData from '../menu.json';

const creatMenuMarkup = (menuData) => menuData.map(menuTemplate).join('');
export const markup = creatMenuMarkup(menuData);