process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
const paths = require('./paths');
const commonConfig = require('./webpack.config');
const config = commonConfig(process.env.NODE_ENV);
const { merge } = require('webpack-merge');

module.exports = merge(config, {
  devtool: 'eval-source-map', // 开发时出错能知道在源代码中哪一行
  devServer: {
    static: {
      directory: paths.appBuild, // 从build里提供bundle
    },
    host: 'localhost',
    port: '3000',
    historyApiFallback: true,
    hot: true,
  },
});
