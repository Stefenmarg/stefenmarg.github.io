const templateFormat = require('../config/template_formats.json');

async function addTemplateFormat(eleventyConfig) {
    if (Array.isArray(templateFormat.format)) {
        templateFormat.format.forEach((format) => {
            eleventyConfig.addTemplateFormats(`${format}`);
            console.log(`[11ty CSTM] Added template format: ${format}`);
        });
    } else {
        console.error('[11ty CSTM] The template_format.json "paths" key is missing or not an array.');
    }
}

module.exports = addTemplateFormat;