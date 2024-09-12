// 用户数据库
const findUser = () => {};
// 存数据
const insertUser = ({ mySql, data }) => {
  console.log('data', data);
  const { username, password } = data || {};
  const insertSql = `insert into user(username, password) values(?, ?, ?)`;
  mySql.query(
    insertSql,
    [username, password],
    function (error, results, fields) {
      console.log('results', results, error);
      if (error) {
        return false;
      }
    }
  );
  return true;
};

module.exports = {
  insertUser,
  findUser,
};
