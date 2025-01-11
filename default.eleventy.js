require('dotenv').config(); // set enviroment=Dev | set enviroment=Prod

//Configuration data for the builds.
const Enviroments = require('./config/enviroments.json');

//Code snippets in their own modules.
const SetPlugins = require('./modules/Plugins');
const SetFilters = require('./modules/Filters');
const SetShortcodes = require('./modules/Shortcodes');
const RegisterCollections = require('./modules/PostProcessing');
const RegisterFileEvents = require('./modules/FileOperations');

module.exports = function(eleventyConfig) {
    const enviroment = process.env.enviroment || 'Dev';

    //Setup the filters for the site.
    SetFilters(eleventyConfig);

    //Setup the various plugins that are used by the site.
    SetPlugins(eleventyConfig);

    //Register the shortcodes used by the site.
    SetShortcodes(eleventyConfig);

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