const path = require('path');
console.log('path', path);

module.exports = {
  entry: '../lilin/commonJs/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  }
}
