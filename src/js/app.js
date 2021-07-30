const Theme = {
    LIGHT: 'light-theme',
    DARK : 'dark-theme'
};

const bodyTheme = document.querySelector('body');
//const themeSwitch = document.querySelector('.theme-switch');
//const themeSwitchControl = document.querySelector('.theme-switch__control');
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');

//console.log('themeSwitchToggle :>> ', themeSwitchToggle);
// let localStorage;
// if (bodyTheme.classList.length === 0) {
//     localStorage = Theme.LIGHT;
// }
//bodyTheme.classList.add(Theme.LIGHT);
const theme = localStorage.getItem('theme');
bodyTheme.classList.add(localStorage);

const onThemeSwitchToggle = () => {
    if (localStorage === undefined) {
        localStorage.setItem('theme', Theme.DARK);
        bodyTheme.classList.toggle(localStorage.getItem('theme'));
    }
    //console.log('bodyTheme :>> ', bodyTheme);
}

themeSwitchToggle.addEventListener('change', onThemeSwitchToggle);


