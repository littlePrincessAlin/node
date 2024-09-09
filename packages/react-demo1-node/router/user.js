// 引入koa-router
const Router = require('koa-router');
const controller = require('../controller/index');
let router = new Router();

router.get('/lilin', ctx => {
  console.log('11111');
  ctx.body = 'lilin';
});
router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/permission', controller.permission);

// 导出路由
module.exports = router;
