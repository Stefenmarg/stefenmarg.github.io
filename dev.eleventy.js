const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const registerCollections = require('./collections');

require('dotenv').config();

module.exports = function (eleventyConfig) {
    //All the plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    
    //Files to copy to the destination without processing
	eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/js/snowstorm.js');

    //Watch for any file change 
    eleventyConfig.addWatchTarget('src/js');
	eleventyConfig.addWatchTarget('src/collections');
    
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
