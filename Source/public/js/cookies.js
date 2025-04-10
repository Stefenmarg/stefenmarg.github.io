exports.getCookie = (name) => {
    //Get all the cookies and split them by their seperator
    const cookieArr = document.cookie.split(';');
    //Iterate through the cookies of the site
    for (let cookie of cookieArr) {
        const [key, value] = cookie.trim().split('=');
        //If the cookie matches the one that we searched, return it's value
        if (key === name) return value;
    }
    //Else return null as it was not found.
    return null;
}

exports.setCookie = (name, value) => {
    const expires = 7; //Expiration time in days
    const path = '/'; //Path is always root
    const sameSite = 'Strict';// SameSite Strict for security

    //Create the base cookie
    let cookieString = `${name}=${value}; path=${path}`;

    //Set expiration time (7 days)
    const date = new Date();
    //Convert days to milliseconds
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000); 
    // Attach the expiration cookie to the base cookie
    cookieString += `; expires=${date.toUTCString()}`;

    //Apply SameSite Strict (to prevent cross-site requests)
    cookieString += `; SameSite=${sameSite}`;

    //Apply the cookie
    document.cookie = cookieString;
}