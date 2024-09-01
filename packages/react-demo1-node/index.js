// 入口文件
const Koa = require('koa');
const app = new Koa();
const router = require('./router/index.js');

// 添加路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log(`项目启动成功：http://localhost:3000/`);
});
