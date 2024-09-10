const { CODE_MSG } = require('../utils/codeMsg.js');

const reqErrCatchMiddleware = (ctx, next) => {
  const header = ctx.request.header;
  const data = ctx.request.body; // post请求需要这样获取
  const mySql = ctx.mySql;

  if (!header) {
    ctx.body = CODE_MSG['HEADERS_ERROR'];
    return;
  }
  if (!data) {
    ctx.body = CODE_MSG['FAILED_REQUEST_DATA'];
    return;
  }
  if (!mySql) {
    ctx.body = CODE_MSG['DATA_BASE_CONNECT_ERROR'];
    return;
  }
  next();
};

module.exports = reqErrCatchMiddleware;
