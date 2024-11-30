export function getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let cookie of cookieArr) {
        const [key, value] = cookie.trim().split('=');
        if (key === name) return value;
    }
    return null;
}

export function setCookie(name, value) {
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
}