// 入口文件
const Koa = require('koa');
const app = new Koa();
const router = require('./router/index.js');
const koa2cors = require('koa2-cors'); // 配置跨域
const mySqlMiddleware = require('./middlewares/mySqlMiddleware.js');
const reqErrCatchMiddleware = require('./middlewares/reqErrCatchMiddleware.js');
const bodyParser = require('koa-bodyparser');
const { CODE_MSG } = require('./utils/codeMsg.js');
const koaJwt = require('koa-jwt'); // 验证token

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
// 校验token
app.use(
  koaJwt({ secret: 'yolo' }).unless({
    // 白名单 不健权
    path: [/^\/api\/users\/login/, /^\/api\/users\/register/],
  })
);
app.use(async (ctx, next) => {
  await next().catch(err => {
    if (err.status == '401') {
      ctx.status = 200;
      ctx.body = CODE_MSG[TOKEN_ERROR];
    }
  });
});

// 请求参数错误统一拦截
app.use(reqErrCatchMiddleware);
// 添加路由中间件
app.use(router.routes()).use(router.allowedMethods());
// 启动
app.listen(3000, () => {
  console.log(`项目启动成功：http://localhost:3000/`);
});
