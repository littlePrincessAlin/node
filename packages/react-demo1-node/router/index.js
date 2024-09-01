// 引入koa-router
const Router = require('koa-router');
// 引入路由对象
const user = require('./user.js');

// 生成新的router对象
let router = new Router();

// 添加路由管理
// 获取用户信息
router.use('/api/user', user.routes());

// 导出路由
module.exports = router;
