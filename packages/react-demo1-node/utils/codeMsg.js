const CODE_MSG = {
  SUCCESS: {
    code: 1,
    msg: '接口请求成功',
  },
  FAILED_REQUEST_DATA: {
    code: 2,
    msg: '参数异常',
  },
  FAILED_RESPONSE_DATA: {
    code: 3,
    msg: '暂无数据',
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
    code: 404,
    msg: '鉴权未通过',
  },
  NOT_FOUND: {
    code: 999,
    msg: '未知错误',
  },
};

module.exports = {
  CODE_MSG,
};
