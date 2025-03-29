const Cookies = require('./cookies');

exports.toggleTheme = () => {
    //Get the whole document element.
    let htmlElement = document.documentElement;
    //Get the theme attribute.
    let currentTheme = htmlElement.getAttribute("data-bs-theme");
    //Choose the oposite theme and save it to a variable
    let newTheme = currentTheme === "light" ? "dark" : "light";
    //Update the theme attribute to the new theme.
    htmlElement.setAttribute("data-bs-theme", newTheme);
    //Update the cookie prefrences with the new theme.
    Cookies.setCookie('theme', htmlElement.getAttribute("data-bs-theme"));
}

exports.syncTheme = () => {
    //Get the whole document element.
    let htmlElement = document.documentElement;
    //Get the prefered theme saved in the cookies.
    let bsTheme = Cookies.getCookie('theme');
    //If there is not a theme saved to the cookies.
    if (bsTheme === null) {
        //Save a cookie that has the dark theme on by default.
        Cookies.setCookie('theme', htmlElement.getAttribute("data-bs-theme"));
    } else {
        //Set the theme to be the one selected by the user.
        htmlElement.setAttribute("data-bs-theme", bsTheme);
    }
}

exports.syncSelectedTab = () => {
    //Get the current page's path
    const page = window.location.pathname.split("/").join("");
    //Get all the navigation elements that have the page_indicator class
    const page_indicators = document.getElementsByClassName("page_indicator");

    //For every one of them, iteratively check if they are they match the page's path.
    for (var i = 0; i < page_indicators.length; i++) {
        
        //If the element is the one of the page then add the selected page class tag.
        if (page_indicators[i].className.split(' ')[1].includes(page)) {
            page_indicators[i].className += " selected_page";
            console.log(page_indicators[i]);
            //And exit, since you can only be in one of them.
            break;
        }
    }
    //If no indicator has been found then dont apply the tag to anything.
}