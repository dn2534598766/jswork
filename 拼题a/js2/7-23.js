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
  var year = parseInt(con[0]);  //
  var i = parseInt(con[0]);
  var con2 = parseInt(con[1]);
  var num;
  var sut;
  for (i; i < 3013; i++) {
    let temp = {};
    let istr = (Array(4).join(0) + i).slice(-4);
    let arr = istr.split("");
    for (let j = 0; j < arr.length; j++) {
      if (!temp[arr[j]]) {
        temp[arr[j]] = arr[j];
      }
    }

    let len = Object.keys(temp).length;
    // console.log(arr)
    if (len == con2) {
      sut = istr;
      num = istr - year;
      break;
    }
  }

  console.log(num+" "+sut);
  process.exit(0);

});

