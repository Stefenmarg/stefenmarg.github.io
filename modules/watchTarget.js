const WatchTarget = require('../config/watch_target.json');

function addWatchTarget(eleventyConfig) {
    if (Array.isArray(WatchTarget.paths)) {
        WatchTarget.paths.forEach((path) => {
            eleventyConfig.addWatchTarget(`${path}`);
            console.log(`[11ty CSTM] Added WatchTarget for: ${path}`);
        });
    } else {
        console.error('[11ty CSTM] The watch_target.json "paths" key is missing or not an array.');
    }
}

module.exports = addWatchTarget;