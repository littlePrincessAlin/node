const CODE_MSG = {
  SUCCESS: {
    code: 1,
    msg: '接口请求成功',
  },
  FAILED_REQUEST_DATA: {
    code: 2,
    msg: '前端参数异常',
  },
  FAILED_RESPONSE_DATA: {
    code: 3,
    msg: '后端数据异常',
  },
  DATA_BASE_CONNECT_ERROR: {
    code: 4,
    msg: '数据库链接失败',
  },
  HEADERS_ERROR: {
    code: 5,
    msg: '请求头异常',
  },
  NO_PERMISSION: {
    code: 500,
    msg: '后端鉴权未通过',
  },
  NO_PERSON: {
    code: 400,
    msg: '找不到用户',
  },
  TOKEN_ERROR: {
    code: 401,
    msg: '找不到用户',
  },
  NO_PATH: {
    code: 404,
    msg: '找不到接口',
  },
  NOT_FOUND: {
    code: 999,
    msg: '未知错误',
  },
};

module.exports = {
  CODE_MSG,
};
