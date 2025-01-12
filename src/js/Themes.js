const CookieManager = require("./Cookies.js");

const basePallet = [{
        Hex: '#000000'
    },
    {
        Hex: '#FFFFFF'
    }
];

// Change the colors of the objects that need to be mnually changed
function ColorChangeItems(Classes, HexColor) {
    if (!Classes || !HexColor) {
        throw 'Arguments given to ColorChangeItems() not an array OR no color given'
    }
    //For all the classes provided to the function.
    Classes.forEach((Class) => {
        // Get all the elements of the class that need a manual change and iteratively change them.
        const NavigationItems = document.getElementsByClassName(Class);
        for (let i = 0; i < NavigationItems.length; i++) {
            NavigationItems[i].style.color = HexColor;
        }
    }); 
}

// Set the current theme
function setMode(intMode) {
    //Implemented fix for out of bound exception in the manual (in dev tools selection)
    intMode = Math.abs(intMode % 2);

    // Chnage the color of the icons in the footer and the navigation links in the header of the site.
    ColorChangeItems(['NavigationEntry', 'Title'], basePallet[1 - intMode]["Hex"]);

    // Change color of the text and background color based on the theme selected.
    const bodyElement = document.getElementById('Body');
    bodyElement.style.color = basePallet[1 - intMode]["Hex"];
    bodyElement.style.background = basePallet[intMode]["Hex"];

    // Save the prefered theme in the cookie
    CookieManager.setCookie("Theme", intMode);
}

export function toggleTheme() {
    let newMode = 1 - parseInt(CookieManager.getCookie("Theme")) || 0;
    setMode(newMode);
}

export function SyncCookieTheme() {
    // Retrieve the cookie and set mode based on its value
    const modeCookie = CookieManager.getCookie("Theme");
    if (modeCookie !== null) {
        // Set the mode in the cookie.
        setMode(parseInt(modeCookie));
    } else {
        // Set the Default mode if cookie is not found
        setMode(0);
    }
    update_copyright();
}

//Automatically updates the year in the copyright notice in
// the footer of the site with the current year of the user.
function update_copyright() {
    //Get the div that holds the year text.
    const year_obj = document.getElementById('copyright_date');
    //Update it's yeaer to the current year.
    //&nbsp; basically will not collapse like regular spaces in HTML.
    year_obj.innerHTML = ` &nbsp;${ new Date().getFullYear()}&nbsp;`
}