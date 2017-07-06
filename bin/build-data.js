const fs = require('fs');
const util = require('util');
const path = require('path');
const data = require('emoji-datasource');
const emojione = require('emojione');

console.log('[emoji-short] Generating data.');
const result = data
  .map(datum =>  `${datum.short_names.map(name => `:${name}:`).join('|')}@${datum.image}`)
  .reduce((prev, curr) => {
    const [ shortnames, image ] = curr.split('@');
    shortnames.split('|').forEach(shortname => {
      prev[shortname] = { image: image, unicode: emojione.convert(image.replace('.png', '')) };
    });
    return prev;
  }, {});

console.log('[emoji-short] Writing data to file.');
const writePath = path.join(process.cwd(), 'data/data.js');
fs.writeFileSync(writePath, `module.exports = ${util.inspect(result, { breakLength: Infinity })};\n`);

console.log('[emoji-short] Done :white_check_mark:');
