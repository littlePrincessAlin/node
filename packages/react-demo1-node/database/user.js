// 用户数据库

// 存数据
const insertUser = ({ mySql, data }) => {
  console.log('data', data);
  mySql.query('INSERT INTO user ?', data, function (error, results, fields) {
    console.log('results', results, fields, error);
    if (error) throw error;
  });
  return true;
};

module.exports = {
  insertUser,
};
