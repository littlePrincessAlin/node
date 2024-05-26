console.log("lilin");
console.log("Math", Math);
console.log("Date", Date);
console.log("setTimeout", setTimeout);
console.log("setInterval", setInterval);
console.log("requestAnimationFrame等价于nodeJs中setImmediate", setImmediate);
console.log("当前运行脚本所在的目录，fileName", __filename);
console.log("dirName", __dirname);
console.log("进程", process);

// 石头剪刀布游戏
// 记录玩家行为
let playAction = process.argv[process.argv.length - 1];
let computerAction = '';
let random = Math.random() * 3;
if(random < 1) {
  computerAction = 'rock';
}else if (random > 2) {
  computerAction = 'scissor';
}else {
  computerAction = 'paper';
}

if(computerAction === playAction) {
  console.log('平局')
}else if (
  (computerAction === 'rock' && playAction === 'paper') ||
  (computerAction === 'scissor' && playAction === 'rock') ||
  (computerAction === 'paper' && playAction === 'scissor')
) {
  console.log('你赢了');
} else {
  console.log('你输了');
}