const fs = require('fs');

let exportContent = {};

// Read from this directory and add them as exports
fs.readdirSync(__dirname).forEach(function(file) {
  if (file.indexOf(".js") > -1 && file !== 'index.js') {
    let directoryContent = require(`./${file}`);

    exportContent = {
      ...exportContent,
      ...directoryContent
    }
  }
});

module.exports = {
  ...exportContent
}