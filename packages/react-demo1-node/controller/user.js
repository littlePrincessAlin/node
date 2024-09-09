const { insertUser } = require('../database/index.js');

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
  console.log('register', ctx);
  insertUser(ctx);
};

module.exports = {
  permission,
  login,
  register,
};
