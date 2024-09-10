// 入口文件
const Koa = require('koa');
const app = new Koa();
const router = require('./router/index.js');
const koa2cors = require('koa2-cors'); // 配置跨域
const mySqlMiddleware = require('./middlewares/mySqlMiddleware.js');
const reqErrCatchMiddleware = require('./middlewares/reqErrCatchMiddleware.js');
const bodyParser = require('koa-bodyparser');

// post请求参数解析
app.use(bodyParser());
// 数据库连接中间件
app.use(mySqlMiddleware);
// 跨域
app.use(
  koa2cors({
    origin: '*',
    maxAge: 5,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  })
);
// 请求参数错误统一拦截
app.use(reqErrCatchMiddleware);
// 添加路由中间件
app.use(router.routes()).use(router.allowedMethods());
// 启动
app.listen(3000, () => {
  console.log(`项目启动成功：http://localhost:3000/`);
});
