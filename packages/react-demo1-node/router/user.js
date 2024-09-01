// 引入koa-router
const Router = require('koa-router');
let router = new Router();
router.post('/', async ctx => {
  ctx.body = {
    code: 200,
    message: '成功获取用户信息',
  };
});
router.post('/login', async ctx => {
  ctx.body = {
    code: 200,
    message: '成功登陆/注册',
  };
});
router.post('/permission', async ctx => {
  ctx.body = {
    code: 200,
    message: '获取用户权限成功',
  };
});
// 导出路由
module.exports = router;
