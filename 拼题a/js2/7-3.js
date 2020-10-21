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

    let row = parseInt((n / 2) + 1);
    for (let i = 1; i <= row; i++) {
        let str ="";
        for (let j = row - i; j > 0; j--) {
            str +=" "+" ";
        }
        for (let j = 0; j < (2 * i - 1); j++) {
            str +="* ";
        }
        console.log(str);
    }
    for (let i = 1; i < row; i++) {
        let str ="";
        for (let j = 0; j < i; j++) {
            str +=" "+" ";
        }
        for (let j = (row - i) * 2 - 1; j > 0; j--) {
            str +="* ";
        }
        console.log(str);
    }

    process.exit(0);

});

