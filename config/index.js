const env = process.env.NODE_ENV || 'development'; // 'dev' or 'test'

let config = require('./config.json')[env];

console.log(JSON.stringify(config, null, '\t'));

module.exports = config;
// Vibhor123456
