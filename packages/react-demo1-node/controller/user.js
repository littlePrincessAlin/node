const { insertUser, findUser } = require('../database/index.js');
const { CODE_MSG } = require('../utils/codeMsg.js');
// token
const jwt = require('jsonwebtoken');
// const crypto = require('crypto');
// const id = crypto.randomUUID({ disableEntropyCache: true });
// const {v4 : uuidv4} = require("uuid")const id = uuidv4()
// const { nanoid } = require("nanoid")const id = nanoid()

// 鉴权接口
const permission = ctx => {
  console.log('Permission', ctx);
  // 没有权限
  ctx.body = {
    code: 999,
    data: false,
  };
  // ctx.body = {
  //   code: 1,
  //   data: true,
  // };
};

// 登陆接口
const login = async ctx => {
  /**
   * @returns:
   *  0: 'NO_PERSON'
   *  1: 'PASSWORD_ERROR'
   *  2: 'LOGIN_SUCCESS'
   */
  const { codeType, data } = findUser({
    mySql: ctx.mySql,
    data: ctx.request.body,
  });
  let token = null;
  if (codeType === 'LOGIN_SUCCESS') {
    // 创建token
    token = jwt.sign(
      {
        data, // 数据
      },
      'yolo', // 私钥
      { expiresIn: '1h', algorithm: 'RS256' } // 过期时间与加密方式
    );
  }
  const map = {
    NO_PERSON: () => {
      ctx.body = CODE_MSG['NO_PERSON'];
    },
    PASSWORD_ERROR: () => {
      ctx.body = {
        code: 1001,
        msd: '密码错误',
      };
    },
    LOGIN_SUCCESS: () => {
      ctx.body = {
        ...CODE_MSG['SUCCESS'],
        data: token,
      };
    },
  };
  map[codeType]();
};

// 注册用户信息
const register = ctx => {
  const res = insertUser({ mySql: ctx.mySql, data: ctx.request.body });
  res ? (ctx.body = CODE_MSG['SUCCESS']) : (ctx.body = CODE_MSG['NOT_FOUND']);
};

module.exports = {
  permission,
  login,
  register,
};
