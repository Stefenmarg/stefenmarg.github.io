const CookieManager = (function() {
    // Internal function to get a cookie by name
    const getCookie = function(name) {
        const cookieArr = document.cookie.split(';');
        for (let cookie of cookieArr) {
            const [key, value] = cookie.trim().split('=');
            if (key === name) return value;
        }
        return null;
    };

    // Internal function to set a cookie with a given name and value
    const setCookie = function(name, value) {
        const expires = 7; // Expiration time in days
        const path = '/'; // Path is always root
        const sameSite = 'Strict'; // SameSite Strict for security

        let cookieString = `${name}=${value}; path=${path}`;

        // Set expiration time (7 days)
        const date = new Date();
        date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000); // Convert days to milliseconds
        cookieString += `; expires=${date.toUTCString()}`;

        // Apply SameSite Strict (to prevent cross-site requests)
        cookieString += `; SameSite=${sameSite}`;

        // Set the cookie
        document.cookie = cookieString;
    };

    // Expose the functions needed for the theme manager to work
    return { getCookie, setCookie };
})();


const ThemeManager = (function() {
    // The hex xolor pallet of the site
    const basePallet = [
        { Hex: '#000000' },
        { Hex: '#FFFFFF' }
    ];
    
    // Change to the oposite theme
    function toggleTheme() {
        let newMode = 1 - parseInt(CookieManager.getCookie("mode")) || 0;
        setMode(newMode);
    }

    //Sync the saved theme with the theme displayed
    function SyncCookieTheme() {
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

    // The only function that need to be exposed to the user.
    return {toggleTheme, SyncCookieTheme}
})();


// Load theme as soon as the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    ThemeManager.SyncCookieTheme();
});