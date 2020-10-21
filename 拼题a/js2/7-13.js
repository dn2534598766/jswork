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
    let n = parseInt(buf); //获取输入
    var sum = 0;
    for (let i = 1; i <= n; ++i) {
        let m = 1;
        for (let j = 1; j <= i; ++j)
            m *= j;
        sum += m;
    }
    console.log(sum);

    process.exit(0);

});

