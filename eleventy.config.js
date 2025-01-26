require('dotenv').config(); // set enviroment=Dev | set enviroment=Prod

const Collections = require('./Source/_config/collections');
const Files = require('./Source/_config/files');

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const domains = require('./Source/_config/Paths/domains.json');

module.exports = function (eleventyConfig) {
    const enviroment = process.env.enviroment || 'Prod';

	eleventyConfig.setQuietMode(true);
    eleventyConfig.addPlugin(syntaxHighlight);
    
    Files.passthrough(eleventyConfig);
    Files.watchTarget(eleventyConfig);
    Collections.run(eleventyConfig, './Source/Posts/');

    eleventyConfig.addShortcode("year", function () {
        return new Date().getFullYear();
    });

    eleventyConfig.addGlobalData("url", `${domains[`${enviroment}`].url}`);
    eleventyConfig.addGlobalData("baseurl", `${domains[`${enviroment}`].baseurl}`);

    return {
        dir: {
            input: "Source",
            output: "docs",
        },
    }
};