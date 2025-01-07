CookieManager = require("./Cookies.js");

export function enableCheck() {
	const date = new Date();

    if ((date.getMonth() == 11 && date.getDate() >= 1) || (date.getMonth() == 0 && date.getDate() <= 6)) {
        const SnowFlakeButton = document.getElementById("snowFlakeButton")
        SnowFlakeButton.classList.add('fa-regular');
        SnowFlakeButton.classList.add('fa-snowflake');
    } else {
        return false;
    }

    if (parseInt(CookieManager.getCookie("Snow")) == 0) {
        return false;
    }

    if (CookieManager.getCookie("Snow") == null) {
    	CookieManager.setCookie("Snow", 1);
    }

    window.snowStorm.toggleSnow();

    snowStorm.snowCharacter = '❄';

    window.snowStorm.snowColor = '#99ccff';
    window.snowStorm.flakesMaxActive = 96;
    window.snowStorm.followMouse = false;
    window.snowStorm.snowStick = false;
    window.snowStorm.flakeSize = 15;
	window.snowStorm.minSize = 8;
	window.snowStorm.maxSize = 20;

    return true;
}

export function toggleSnow() {
	CookieManager.setCookie("Snow", 1 - parseInt(CookieManager.getCookie("Snow")));

    if (parseInt(CookieManager.getCookie("Snow")) == 0) { 
        window.snowStorm.toggleSnow();
    } 

	enableCheck();
}
