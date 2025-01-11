function SetFilters(eleventyConfig) {
    //Filters that are used in the site
    eleventyConfig.addFilter("dateToRfc2822", function(dateObj) {
        return new Date(dateObj).toUTCString();
    });
    
    eleventyConfig.addFilter("dateToLocaleDateString", function(dateObj) {
        return new Date(dateObj).toLocaleDateString();
    });
}

module.exports = SetFilters;