console.log('read lib');
exports.name = 'lilin';
exports.age = '18';
exports.add = function(a, b) {
  return a + b;
};

// 如果有module.exports，那么上面的exports会被覆盖，require进来的就是module.exports出去的
// module.exports = function() {
//   console.log('module.exports');
// }
setTimeout(() => {
  console.log('通过外部改变exports对象', exports);
}, 2000)
