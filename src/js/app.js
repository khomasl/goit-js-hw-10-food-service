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
if (theme === Theme.DARK) {
    themeSwitchToggle.checked = true;
    localStorage.setItem('theme', Theme.DARK);
    bodyTheme.classList.toggle(localStorage.getItem('theme'));
};
console.log('theme :>> ', theme);
console.log('localStorage :>> ', localStorage);
//bodyTheme.classList.add(theme);

const onThemeSwitchToggle = () => {
    if (theme === null) {
        localStorage.setItem('theme', Theme.DARK);
        bodyTheme.classList.toggle(localStorage.getItem('theme'));
        console.log('localStorage.getItem() :>> ', localStorage.getItem('theme'));
    } else {
        if (theme === Theme.DARK) {
            localStorage.setItem('theme', Theme.LIGHT);
            bodyTheme.classList.toggle(localStorage.getItem('theme'));
            console.log('localStorage.getItem(light) :>> ', localStorage.getItem('theme'));
        } else {
            localStorage.setItem('theme', Theme.DARK);
            bodyTheme.classList.toggle(localStorage.getItem('theme'));
            console.log('localStorage.getItem(Dark) :>> ', localStorage.getItem('theme'));
        }
    }
    //console.log('bodyTheme :>> ', bodyTheme);
}

themeSwitchToggle.addEventListener('change', onThemeSwitchToggle);


