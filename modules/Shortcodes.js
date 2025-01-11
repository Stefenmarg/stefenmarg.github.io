function SetShortcodes(eleventyConfig) {
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
    });
}

module.exports = SetShortcodes;