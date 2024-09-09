const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  extry: resolveApp('index.js'),
  output: resolveApp('dist'),
  controller: resolveApp('controller'),
  database: resolveApp('database'),
  middlewares: resolveApp('middlewares'),
  router: resolveApp('router'),
  schedule: resolveApp('schedule'),
  service: resolveApp('service'),
  utils: resolveApp('utils'),
  view: resolveApp('view'),
};
