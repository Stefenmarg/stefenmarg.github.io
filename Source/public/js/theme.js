exports.syncSelectedTab = () => {
    //Get the current page's path from the URL and remove all '/' characters to create a simplified page identifier.
    const page = window.location.pathname.split("/").join('');

    //Get all elements with the class "page_indicator"
    const page_indicators = document.getElementsByClassName("page_indicator");

    //Initialize a flag to track whether a matching page indicator is found.
    var flag_found_indcator = 0;

    //Iterate through all page indicators to find a match for the current page.
    for (var i = 0; i < page_indicators.length; i++) {
        //Get the text content of the current page indicator and remove spaces.
        var page_indicator_name = page_indicators[i].textContent.split(' ').join('');

        //Get the class name of the current page indicator and normalize spaces.
        var page_indicator_class = page_indicators[i].className.split(' ').join(' ');

        //Check if the current page matches either the class name or the text content of the page indicator.
        if (page_indicator_class.includes(page) || page.includes(page_indicator_name)) {
            //Add the "selected_page" class to the matching page indicator to highlight it.
            page_indicators[i].className += " selected_page";

            //Set the flag to indicate that a matching page indicator was found.
            flag_found_indcator++;

            //Exit the loop early since only one tab can be active at a time.
            break;
        }
    }

    /*
    Handle an edge case where the current page belongs to the "Posts" category.
    If no matching page indicator was found (flag_found_indcator is 0), assume the page is part of the homepage.
    This is necessary because "Home" is not the same as "Blog" or "/" in the URL.
    */
    if (page.includes('Posts') && (1 - flag_found_indcator)) {
        //Manually add the "selected_page" class to the first page indicator.
        page_indicators[0].className += " selected_page";
    }
}