/**
 * Access the `index.js` file.
 *
 * @copyright Nick Freear, 30-Jun-2020.
 * @TODO      Transition to using `Jest` ?
 */

const PKG = require('../package');
const INDEX = require('../index');

const URLS_COUNT = 1;
const KEYS = Object.keys(INDEX);
const BBC_SB = INDEX.BBC_SOUNDS_BOOKMARKS;
const JSON_FILES = PKG.files.filter(file => /\.json$/.test(file));

const EQUAL = JSON_FILES.length === (KEYS.length + BBC_SB.length - 1 - URLS_COUNT);
console.assert(EQUAL);
if (!EQUAL) {
  console.error('>> Error (index). JSON file and key-counts don\'t match!');
  process.exit( 1 );
}

console.log('Keys (index):', KEYS);
console.log('>> OK (index). Key count:', KEYS.length);
