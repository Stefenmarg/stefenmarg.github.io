const Passthrough = require('../config/passthrough.json');

function addPassthroughCopies(eleventyConfig) {
    if (Array.isArray(Passthrough.paths)) {
        Passthrough.paths.forEach((path) => {
            eleventyConfig.addPassthroughCopy(`${path}`);
            console.log(`[11ty CSTM] Added PassthroughCopy for: ${path}`);
        });
    } else {
        console.error('[11ty CSTM] The passthrough.json "paths" key is missing or not an array.');
    }
}

module.exports = addPassthroughCopies;