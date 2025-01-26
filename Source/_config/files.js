exports.watchTarget = (eleventyConfig) => {
    const Watching = require('./Paths/watchTarget.json');
    Watching.forEach(element => {
        console.log(`Added watch target for: ${element}`);
        eleventyConfig.addWatchTarget(`${element}`);
    });
}
exports.passthrough = (eleventyConfig) => {
    const Passthrough = require('./Paths/passthrough.json');
    Passthrough.forEach(element => {
        console.log(`Added passthrough copy for: ${element}`);
        eleventyConfig.addPassthroughCopy(`${element}`); 
    });
}