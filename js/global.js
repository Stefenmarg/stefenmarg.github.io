const basePallet = [
    { Hex: '#000000' },
    { Hex: '#FFFFFF' }
];

function setCookie(mode) {
    // Set the cookie expiration date
    const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = `mode=${mode}; expires=${expireDate.toUTCString()}; path=/; SameSite=Strict`;
}

function getCookie(name) {
    // Find the specific cookie by name
    const cookieArr = document.cookie.split(';');
    for (let cookie of cookieArr) {
        const [key, value] = cookie.trim().split('=');
        if (key === name) return value;
    }
    return null;
}

function setMode(intMode) {
    ColorChangeItems('nav-links', basePallet[1 - intMode]["Hex"]);
    const bodyElement = document.getElementById('Body');
    bodyElement.style.color = basePallet[1 - intMode]["Hex"];
    bodyElement.style.background = basePallet[intMode]["Hex"];
    setCookie(intMode);
}

function ColorChangeItems(Class, HexColor) {
    if (!Class || !HexColor) {
        throw 'Not enough arguments given to ColorChangeItems();'
    }
    const NavigationItems = document.getElementsByClassName(Class);
    for (let i = 0; i < NavigationItems.length; i++) {
        NavigationItems[i].style.color = HexColor; 
    }
}

function SyncCookieTheme() {
    // Retrieve the cookie and set mode based on its value
    const modeCookie = getCookie("mode");
    if (modeCookie !== null) {
        setMode(parseInt(modeCookie));
    } else {
        setMode(0);  // Default mode if cookie is not found
    }
}

// Load theme as soon as the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    SyncCookieTheme();
});

function toggleTheme() {
    let newMode = 1 - parseInt(getCookie("mode")) || 0;
    setMode(newMode);
}