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
    const enviroment = process.env.enviroment || 'Dev';

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

    eleventyConfig.addShortcode("warning", function(content) {
        return `<div class='sign_base sign_warning'><p class="sign_title"><i class="fa-sm fa-solid fa-triangle-exclamation"></i> Warning! </p> ${ content } </div>`;
    });

    eleventyConfig.addShortcode("alert", function(content) {
        return `<div class='sign_base sign_alert'><p class="sign_title"><i class="fa-sm fa-solid fa-triangle-exclamation"></i> Alert! </p> ${ content } </div>`;
    });

    eleventyConfig.addShortcode("info", function(content) {
        return `<div class='sign_base sign_info'><p class="sign_title"><i class="fa-sm fa-solid fa-circle-info"></i> Please note: </p> ${ content } </div>`;
    });

    eleventyConfig.addShortcode("pdf_view", function(content) {
        return `<object data="${content}" type="application/pdf" width="auto" height="auto" data="${content}"> <p>This browser does not support PDFs. Please download the PDF to view it: <a href="${content}">Download PDF</a>.</p></object>`;
    })

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