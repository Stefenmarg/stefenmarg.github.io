require('dotenv').config(); // set enviroment=Dev | set enviroment=Prod

const Domains = require('./config/domains.json');

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const xmlPlugin = require("eleventy-xml-plugin");
const readingTime = require('eleventy-plugin-reading-time');

const registerCollections = require('./modules/collections');
const addWatchTarget = require('./modules/watchTarget');
const addPassthroughCopies = require('./modules/passThrough');
const addTemplateFormat = require('./modules/addTemplateFormat');

module.exports = function(eleventyConfig) { 
	const enviroment = process.env.enviroment  || 'Dev';

    //All the plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(xmlPlugin);
    eleventyConfig.addPlugin(readingTime);

    //Filters that are used in the site
    eleventyConfig.addFilter("dateToRfc2822", function(dateObj) {
        return new Date(dateObj).toUTCString();
    });
    eleventyConfig.addFilter("dateToLocaleDateString", function(dateObj) {
        return new Date(dateObj).toLocaleDateString();
    });

    //Collection management
    registerCollections(eleventyConfig, './src/posts');
    addWatchTarget(eleventyConfig);
    addPassthroughCopies(eleventyConfig);
    addTemplateFormat(eleventyConfig);

    eleventyConfig.addGlobalData("url", `${Domains[`${enviroment}`].url}`);
    eleventyConfig.addGlobalData("baseurl", `${Domains[`${enviroment}`].baseurl}`);

	return {
        dir: {
        	output: `${Domains[`${enviroment}`].output}`,
            input: "src"
        }
    };
}