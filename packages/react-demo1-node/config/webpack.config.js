'use strict';
const paths = require('./paths');
console.log('paths', paths);
module.exports = function (webpackEnv) {
  return {
    mode: webpackEnv,
    target: 'node',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: 'bundle.[chunkhash].js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'], // 省略扩展
      alias: {
        // 省略地址前缀写法components即可
        controller: paths.controller,
        database: paths.database,
        middlewares: paths.middlewares,
        router: paths.router,
        schedule: paths.schedule,
        service: paths.service,
        utils: paths.utils,
        view: paths.view,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                rootMode: 'root',
              },
            },
          ],
        },
      ],
    },
  };
};
