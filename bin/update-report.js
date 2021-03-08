'use strict';

const fs = require('fs').promises;
const path = require('path');

const dir = path.join(__dirname, '..', 'docs', 'reports');

async function start() {
  const files = await fs.readdir(dir);
  const htmlFiles = files.filter(file => file.endsWith('html'))
    .sort((a, b) => a - b);

  const indexFilePath = path.join(dir, 'index.md');
  await fs.unlink(indexFilePath);

  const heading = '# Reports';
  await fs.writeFile(indexFilePath, `${heading}\n\n`, 'ascii');

  for(let i = htmlFiles.length - 1; i >= 0; i--) {
    const filename = htmlFiles[i];
    let date = filename.split(/-(.+)/)[1];
    date = date.substring(0, date.length - 5);

    const reportHeading = i === htmlFiles.length - 1 ?
      `## Report ${date} (Latest)` : `## Report ${date}`;
    const fileDescription = `Click [here](./${filename})`;

    await fs.appendFile(indexFilePath, `${reportHeading}\n\n`, 'ascii');
    await fs.appendFile(indexFilePath, `${fileDescription}\n\n`, 'ascii');
  }
}

(async () => {
  await start();
})();
