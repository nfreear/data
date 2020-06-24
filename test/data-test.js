/**
 * Lint each JSON data-file using `jsonlint`.
 *
 * @copyright Nick Freear, 07-Mar-2020.
 * @TODO      Transition to using `Jest` ?
 */

const PKG = require('../package');
const jsonlint = require('jsonlint');
const fsp = require('fs').promises;
const join = require('path').join;
// const INDEX = require('../index');

const JSON_FILES = PKG.files.filter(file => /\.json$/.test(file));

let fileCount = 0;

JSON_FILES.forEach(async (jsonFile, idx) => {
  try {
    const PATH = join(__dirname, '..', jsonFile);
    const JSON = await fsp.readFile(PATH, 'utf8');

    const DATA = await jsonlint.parse(JSON);
    const count = DATA.data ? DATA.data.length : DATA.feeds ? DATA.feeds.length : null;

    console.log(idx + 1, 'File:', jsonFile, '~~ data count:', count);

    fileCount++;

    if (fileCount >= JSON_FILES.length) {
      console.log(`>> OK. No JSON lint errors found in ${fileCount} files.`);
    }
  } catch (ex) {
    console.error(`>> Error in JSON file ${idx + 1}: '${jsonFile}'`);
    console.error(ex.message);

    // If there's an error, fail `npm test` / GitHub CI.
    process.exit( 1 );
  }
});
