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
    
    //Collection management
    registerCollections(eleventyConfig, 15);
    
    //Url attributes
    eleventyConfig.addGlobalData("url", "https://stefenmarg.github.io");
    eleventyConfig.addGlobalData("baseurl", "");

    //Build input and output files    
	return {
        dir: {
        	output: "docs",
            input: "src"
        }
    };
};
