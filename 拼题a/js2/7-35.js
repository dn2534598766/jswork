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
  var con = input.split(" ");  //将输入以空格分开
  var num1 = parseInt(con[0]);  //
  var num2 = parseInt(con[1]);

  var add = num1+num2;
  var str ="";
  for(let i = 0;i<add;i++){
      str +="Wang!";
  }

  console.log(str);
  process.exit(0);

});

