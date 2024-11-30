const CookieManager = require("./Cookies.js");

const basePallet = [{
        Hex: '#000000'
    },
    {
        Hex: '#FFFFFF'
    }
];

// Change the colors of the objects that need to be mnually changed
function ColorChangeItems(Class, HexColor) {
    if (!Class || !HexColor) {
        throw 'Not enough arguments given to ColorChangeItems();'
    }
    // Get all the elements that need a manual change by class and iteratively change them.
    const NavigationItems = document.getElementsByClassName(Class);
    for (let i = 0; i < NavigationItems.length; i++) {
        NavigationItems[i].style.color = HexColor;
    }
}

// Set the current theme
function setMode(intMode) {
    //Implemented fix for out of bound exception in the manual (in dev tools selection)
    intMode = Math.abs(intMode % 2);

    // Chnage the color of the icons in the footer and the navigation links in the header of the site.
    ColorChangeItems('nav-links', basePallet[1 - intMode]["Hex"]);

    // Change color of the text and background color based on the theme selected.
    const bodyElement = document.getElementById('Body');
    bodyElement.style.color = basePallet[1 - intMode]["Hex"];
    bodyElement.style.background = basePallet[intMode]["Hex"];

    // Save the prefered theme in the cookie
    CookieManager.setCookie("mode", intMode);
}

export function toggleTheme() {
    let newMode = 1 - parseInt(CookieManager.getCookie("mode")) || 0;
    setMode(newMode);
}

export function SyncCookieTheme() {
    // Retrieve the cookie and set mode based on its value
    const modeCookie = CookieManager.getCookie("mode");
    if (modeCookie !== null) {
        // Set the mode in the cookie.
        setMode(parseInt(modeCookie));
    } else {
        // Set the Default mode if cookie is not found
        setMode(0);
    }
}