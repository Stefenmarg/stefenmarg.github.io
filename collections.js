const fs = require('fs').promises;

async function registerCollections(eleventyConfig, limit) {
  try {
    const entries = await fs.readdir('./src/posts/');
    await Promise.all(entries.map(async (entry) => {
      const entryPath = `./src/posts/${entry}`;
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
