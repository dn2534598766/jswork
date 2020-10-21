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
    let s =input;
    let flag = (s[0]== '-'? 1:0);
    let len = s.length;
    let bit = len - flag, cnt = 0;
    for(let i = 0; i < len; i ++){
      if(s[i] == '2') cnt ++;
    }
    let ans = cnt/bit * 100;
    if(flag == 1) ans = ans * 1.5;
    if((s[len-1] - '0')%2 == 0) ans = ans * 2;
    console.log(ans.toFixed(2)+"%");

    process.exit(0);
});

