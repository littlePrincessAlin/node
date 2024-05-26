console.log('read lib');
exports.name = 'lilin';
exports.age = '18';
module.exports = function() {
  console.log('module.exports');
}
setTimeout(() => {
  console.log('通过外部改变exports对象', exports);
}, 2000)
