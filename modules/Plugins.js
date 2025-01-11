const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const xmlPlugin = require("eleventy-xml-plugin");
const readingTime = require('eleventy-plugin-reading-time');

function SetPlugins(eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(xmlPlugin);
    eleventyConfig.addPlugin(readingTime);
}

module.exports = SetPlugins;