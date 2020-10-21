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
  let con = buf.split(" ");   //将输入以空格分开储存到数组
  var year = parseInt(con[0]);  //拿到年份，即数组第一位
  var i = parseInt(con[0]);     //for循环备用
  var con2 = parseInt(con[1]);  //拿到条件，数组第二位
  var num;  //年份相差时间数
  var sut;  //结果年份
  for (i; i < 3013; i++) {
    let temp = {}; //构造一个对象
    let arr = (Array(4).join(0) + i).slice(-4).split("");   //把年份拆成4个数字的数组
    for (let j = 0; j < arr.length; j++) {  //获取arr数组长度
      if (!temp[arr[j]]) {    //如果对象中没有，把数组每一位储存到temp对象中
        temp[arr[j]] = arr[j];  
      }
    }

    

    let len = Object.keys(temp).length;   //获取对象长度
    // console.log(arr)   
    if (len == con2) {    //如果长度等于条件
      if (String(i).length < 4) {   //如果少于4位数
        i = (Array(4).join(0) + i).slice(-4); //在数字前面补零
      }
      sut = i;  //给结果赋值
      num = i - year;  //年份差相减
      break;    //跳出循环
    }
  }

  console.log(num+" "+sut);
  process.exit(0);

});

