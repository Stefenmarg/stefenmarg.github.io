const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const xmlPlugin = require("eleventy-xml-plugin");
const registerCollections = require('./collections');

module.exports = function (eleventyConfig) {
    //All the plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(xmlPlugin);
    
    //Additional tempate formats used to build this site
    eleventyConfig.addTemplateFormats("xml");

    //Filters that are used in the site
    eleventyConfig.addFilter("dateToRfc2822", function(dateObj) {
        return new Date(dateObj).toUTCString();
    });
    
    //Files to copy to the destination without processing
	eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/js/snowstorm.js');

    //Watch for any file change 
    eleventyConfig.addWatchTarget('src/js');
    eleventyConfig.addWatchTarget('src/_data');
    eleventyConfig.addWatchTarget('src/collections');
    eleventyConfig.addWatchTarget('src/rss.xml.njk');
    
    //Collection management
    registerCollections(eleventyConfig, 15);
    
    //Url attributes
    eleventyConfig.addGlobalData("url", "http://192.168.1.74");
    eleventyConfig.addGlobalData("baseurl", "");

    //Build input and output files    
	return {
        dir: {
        	output: "dev",
            input: "src"
        }
    };
};
