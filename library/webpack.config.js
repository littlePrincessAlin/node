const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    'large-number': path.join(__dirname, './src/index.js'), // 未压缩
    'large-number.min': path.join(__dirname, './src/index.js'), // 压缩版
  },
  output: {
    filename: "[name].js",
    library: 'largeNumber', // 打包工具库的名字
    libraryExport: "default", // 不然使用的时候需要 libraryExport.export
    libraryTarget: 'umd' // 支持引入的库：umd（es、amd、cjs、script 全局变量的方式引用）
  },
  optimization: {
    minimize: true,
    minimizer: [
      // uglifyJsPlugin 3.0以上才支持es6语法的压缩
      new TerserPlugin({
        include: /\.min\.js$/,
      })
    ]
  }
}