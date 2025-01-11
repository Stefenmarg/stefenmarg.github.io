const WatchTarget = require('../config/watch_target.json');
const Passthrough = require('../config/passthrough.json');
const templateFormat = require('../config/template_formats.json');

function RegisterFileEvents(eleventyConfig) {
    if (Array.isArray(WatchTarget.paths)) {
        WatchTarget.paths.forEach((path) => {
            eleventyConfig.addWatchTarget(`${path}`);
            console.log(`[11ty CSTM] Added WatchTarget for: ${path}`);
        });
    } else {
        console.error('[11ty CSTM] The watch_target.json "paths" key is missing or not an array.');
    }

    if (Array.isArray(Passthrough.paths)) {
        Passthrough.paths.forEach((path) => {
            eleventyConfig.addPassthroughCopy(`${path}`);
            console.log(`[11ty CSTM] Added PassthroughCopy for: ${path}`);
        });
    } else {
        console.error('[11ty CSTM] The passthrough.json "paths" key is missing or not an array.');
    }

    if (Array.isArray(templateFormat.format)) {
        templateFormat.format.forEach((format) => {
            eleventyConfig.addTemplateFormats(`${format}`);
            console.log(`[11ty CSTM] Added template format: ${format}`);
        });
    } else {
        console.error('[11ty CSTM] The template_format.json "paths" key is missing or not an array.');
    }
}

module.exports = RegisterFileEvents;