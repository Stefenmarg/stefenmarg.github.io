const fs = require('fs');

exports.run = (eleventyConfig, ParentDirectory) => {
    fs.readdir(`${ParentDirectory}`, (err, data) => { 
        if (err) throw err;
 
        data.forEach((entry) => {
            fs.stat(`${ParentDirectory}${entry}`, (err, stat) => {
                if (err) throw err;

                if (stat.isDirectory()) {
                    console.log(`Added collection: ${entry}`);
                    eleventyConfig.addCollection(`${entry}`, function (collectionApi) {
                        return collectionApi.getFilteredByGlob(`${ParentDirectory}${entry}/*.md`).reverse();
                    });
                }
            });
        });
    });
}