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
    let input = buf.split(" "); //获取输入并以空格拆分为数组
    var a =parseInt(input[0]); //获取价格，即input数组第一位，对应0下标
    var b =parseInt(input[1]); //获取折数，即input数组第二位，对应1下标
    var mon = (a*(b/10));  //价格乘以折数除以10

    //console.log(input)
    // console.log(a);
    // console.log(b);
    console.log(mon.toFixed(2)); //打印出结果并且保留两位小数

    process.exit(0);

});

