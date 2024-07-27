'use strict'

const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
}
