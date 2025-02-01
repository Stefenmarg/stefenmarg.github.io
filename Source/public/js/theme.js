const Cookies = require('./cookies');

exports.toggleTheme = () => {
    let htmlElement = document.documentElement;
    let currentTheme = htmlElement.getAttribute("data-bs-theme");
    let newTheme = currentTheme === "light" ? "dark" : "light";
    htmlElement.setAttribute("data-bs-theme", newTheme);
    Cookies.setCookie('theme', htmlElement.getAttribute("data-bs-theme"));
}

exports.syncTheme = () => {
    let htmlElement = document.documentElement;
    let bsTheme = Cookies.getCookie('theme');
    if (bsTheme === null) {
        //Save the selected theme to be the dark one.
        Cookies.setCookie('theme', htmlElement.getAttribute("data-bs-theme"));
    } else {
        //Set the theme to be the one selected by the user.
        htmlElement.setAttribute("data-bs-theme", bsTheme);
    }
}