const fs = require('fs').promises;

async function registerCollections(eleventyConfig, post_dir) {
  try {
    const entries = await fs.readdir(`${post_dir}`);
    await Promise.all(entries.map(async (entry) => {
      const entryPath = `${post_dir}/${entry}`;
      const status = await fs.stat(entryPath);
      if (status.isDirectory()) {
        console.log(`[11ty CSTM] Registered new collection '${entry}'`);
        eleventyConfig.addCollection(entry, (collection) => {
          const items = collection.getFilteredByGlob(`${entryPath}/*.md`);
          return (items.sort((a, b) => new Date(b.date) - new Date(a.date)));
        });
      }
    }));
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

module.exports = registerCollections;
