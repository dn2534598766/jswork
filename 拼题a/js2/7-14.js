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
    let input = buf.split(" "); //获取输入
    let a = parseInt(input[0]);
    let b = input[1];

    for(let i = 0;i<a/2;i++){
        let str = "";
        for(let j =0;j<a;j++){
            str += b;
        }
        console.log(str);
    }
  
    process.exit(0);
});

