const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const registerCollections = require('./collections');

require('dotenv').config();

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);
    
	eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/css');

    eleventyConfig.addPassthroughCopy('.gitignore');

    eleventyConfig.addPassthroughCopy('./src/js/snowstorm.js');

    eleventyConfig.addWatchTarget('src/js');
	eleventyConfig.addWatchTarget('src/collections');
	
	registerCollections(eleventyConfig, 15);

    const BASE_URL = process.env.BASE_URL || 'stefenmarg.github.io';
    
	return {
        dir: {
        	output: "docs",
            input: "src"
        },
        pathPrefix: BASE_URL,
    };
};
