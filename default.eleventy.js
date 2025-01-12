require('dotenv').config(); // set enviroment=Dev | set enviroment=Prod

//Configuration data for the builds.
const Enviroments = require('./Configs/enviroments.json');

//Code snippets in their own modules.
const SetPlugins = require('./Modules/Plugins');
const SetFilters = require('./Modules/Filters');
const RegisterCollections = require('./Modules/PostProcessing');
const RegisterFileEvents = require('./Modules/FileOperations');

module.exports = function(eleventyConfig) {
    const enviroment = process.env.enviroment || 'Dev';

    //Setup the filters for the site.
    SetFilters(eleventyConfig);

    //Setup the various plugins that are used by the site.
    SetPlugins(eleventyConfig);

    //Register the shortcodes used by the site.
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
        return `<iframe src="${content}" width="100%" height="600px"> This browser does not support PDFs. Please download the PDF to view it:  [Download the PDF](${content}) </iframe>`
    });

    //Register the collections and the posts;
    RegisterCollections(eleventyConfig, './src/posts');

    //Setup the WatchTargets and the DirectCopies to the output.
    RegisterFileEvents(eleventyConfig);
    
    //Set the variables for the site based on the enviroment of the build process.
    eleventyConfig.addGlobalData("url", `${Enviroments[`${enviroment}`].url}`);
    eleventyConfig.addGlobalData("baseurl", `${Enviroments[`${enviroment}`].baseurl}`);

    //Output and input setting for the builder.
	return {
        dir: {
        	output: `${Enviroments[`${enviroment}`].output}`,
            input: "src"
        }
    };
}