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
    var num =0;
    for(let i=0;i<input.length;i++){
        if(parseInt(input[i]) ==250){
            num = i+1;
            break;
        }
    }

    console.log(num);


    process.exit(0);

});

