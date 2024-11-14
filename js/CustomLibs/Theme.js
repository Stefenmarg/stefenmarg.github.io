const ThemeManager = (function() {
    const basePallet = [
        { Hex: '#000000' },
        { Hex: '#FFFFFF' }
    ];
    
    function toggleTheme() {
        let newMode = 1 - parseInt(getCookie("mode")) || 0;
        setMode(newMode);
    }
    function SyncCookieTheme() {
        // Retrieve the cookie and set mode based on its value
        const modeCookie = getCookie("mode");
        if (modeCookie !== null) {
            // Set the mode in the cookie.
            setMode(parseInt(modeCookie));
        } else {
            // Set the Default mode if cookie is not found
            setMode(0); 
        }
    }
    function setCookie(mode) {
        // Set the cookie expiration date
        const expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + 365 * 24 * 60 * 60 * 1000);

        /* Write in the cookie, the mode settings, the expiration date, the in site 
        reach of the cookie and the out of the site reach of the cookie. */
        document.cookie = `mode=${mode}; expires=${expireDate.toUTCString()}; path=/; SameSite=Strict`;
    }

    function getCookie(name) {
        // Find the specific cookie by name, usefull for double language implementation (soon?)
        const cookieArr = document.cookie.split(';');
        for (let cookie of cookieArr) {
            const [key, value] = cookie.trim().split('=');
            if (key === name) return value;
        }
        return null;
    }

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
        setCookie(intMode);
    }

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

    return {toggleTheme, SyncCookieTheme}
})();
