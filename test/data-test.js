/**
 * Lint each JSON data-file using `jsonlint`.
 *
 * @copyright Nick Freear, 07-Mar-2020.
 * @TODO      Transition to using `Jest` ?
 */

const PKG = require('../package');
const jsonlint = require('jsonlint');
const fs = require('fs');
const path = require('path');
// const INDEX = require('../index');

const JSON_FILES = PKG.files.filter(file => /\.json$/.test(file));

JSON_FILES.forEach(async (jsonFile, idx) => {
  try {
    const PATH = path.join(__dirname, '..', jsonFile);
    const JSON = await fs.promises.readFile(PATH, 'utf8');

    const DATA = jsonlint.parse(JSON);
    const count = DATA.data ? DATA.data.length : DATA.feeds ? DATA.feeds.length : null;

    console.log(idx + 1, 'File:', jsonFile, '~~ data count:', count);
  } catch (ex) {
    console.error(`>> Error in JSON file ${idx + 1}: '${jsonFile}'`);
    console.error(ex.message);

    // If there's an error, fail `npm test` / GitHub CI.
    process.exit( 1 );
  }
});
