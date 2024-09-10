const { insertUser } = require('../database/index.js');
const crypto = require('crypto');
const id = crypto.randomUUID({ disableEntropyCache: true });
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
  ctx.body = 'login';
};

// 注册用户信息
const register = ctx => {
  insertUser({ mySql: ctx.mySql, data: ctx.request.body });
};

module.exports = {
  permission,
  login,
  register,
};
