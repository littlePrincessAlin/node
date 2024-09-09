const mySqlMiddleware = (ctx, next) => {
  // 链接数据库
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host: '47.93.26.140',
    port: '3306',
    user: 'root',
    password: 'zhuyuf6214879',
    database: 'lilin',
  });
  connection.connect();
  ctx.mySql = connection;
  next();
};

module.exports = mySqlMiddleware;
