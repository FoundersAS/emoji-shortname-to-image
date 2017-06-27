const fs = require('fs');
const util = require('util');
const path = require('path');
const data = require('emoji-datasource');

console.log('[emoji-short] Generating data.');
const result = data
  .map(datum =>  `${datum.short_names.map(name => `:${name}:`).join('|')}@${datum.image}`)
  .reduce((prev, curr) => {
    const [ shortnames, image ] = curr.split('@');
    shortnames.split('|').forEach(shortname => {
      prev[shortname] = image;
    });
    return prev;
  }, {});

console.log('[emoji-short] Writing data to file.');
fs.writeFileSync(path.join(process.cwd(), 'data/data.js'), `module.exports = ${util.inspect(result, { breakLength: Infinity })};`);

console.log('[emoji-short] Done :white_check_mark:');
