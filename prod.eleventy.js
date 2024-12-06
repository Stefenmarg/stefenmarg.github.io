const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const registerCollections = require('./collections');

module.exports = function (eleventyConfig) {
    //All the plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    
    //Files to copy to the destination without processing
	eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/js/snowstorm.js');

    //Watch for any file change 
    eleventyConfig.addWatchTarget('src/js');
	eleventyConfig.addWatchTarget('src/collections');
    
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
