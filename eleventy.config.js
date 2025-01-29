require('dotenv').config(); // set enviroment=Dev | set enviroment=Prod

const Collections = require('./Source/_config/collections');
const Files = require('./Source/_config/files');

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
    const EnvVars = process.env
    const url = (EnvVars.environment == 'Dev')? `${process.env.host}` : "https://stefenmarg.github.io";
    const baseurl =  (EnvVars.environment == 'Dev')? `${process.env.baseurl}` : "";

	eleventyConfig.setQuietMode(true);
    eleventyConfig.addPlugin(syntaxHighlight);
    
    Files.passthrough(eleventyConfig);
    Files.watchTarget(eleventyConfig);
    Collections.run(eleventyConfig, './Source/Posts/');

    eleventyConfig.addShortcode("year", function () {
        return new Date().getFullYear();
    });

    eleventyConfig.addShortcode("img", function (path) {
        if (path.startsWith('http')) {
            return `<img class="img-fluid" src="${path}" />`;
        }
        return `<img class="img-fluid" src="${url}${baseurl}${path}" />`;
    });    

    eleventyConfig.addGlobalData("url", url);
    eleventyConfig.addGlobalData("baseurl", baseurl);

    return {
        dir: {
            input: "Source",
            output: "docs",
        },
    }
};