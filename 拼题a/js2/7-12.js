const { config } = require('process');
const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,

  //   output: process.stdout,

});

let buf = "";


rl.on('line', (line) => {

  if (line.trim() == "") rl.close()

  //buf数组是命令行输入的信息

  buf = line;

})



rl.on('close', () => {

  //算法写在这里，用console.log()输出

  //需要读取命令行输入的话，使用buf变量
  let input = buf; //获取输入
  var con = parseInt(input);  
  var num = 2;
  for(let i = 1;i<con;i++){
      num *=2;
  }

  console.log("2^"+input + " = " +num);
  process.exit(0);

});

