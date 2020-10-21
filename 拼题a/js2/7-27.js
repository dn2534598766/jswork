const { config } = require('process');
const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,

    //   output: process.stdout,

});

let buf = [];


rl.on('line', (line) => {

    if (line.trim() == "") rl.close()

    //buf数组是命令行输入的信息

    buf.push(line);

})



rl.on('close', () => {

    //算法写在这里，用console.log()输出

    //需要读取命令行输入的话，使用buf变量
    let input = buf; //获取输入
    var arr = [];//声明一个数组
    for (let i = 1; i < input.length; i++) {//遍历
        let temp = input[i].split(" ");//把数组的成员以空格拆开
        arr.push(temp);//放到新的数组上面
    }

    for (let i = 0; i < arr.length; i++) {//遍历新的数组
        if (arr[i][0] == 'M') {//如果数组成员第一位是m
            let num = parseFloat(arr[i][1]);//就用下面这条公式计算
            arr[i][1] = (num / 1.09).toFixed(2);
        } else {//否则，用下面这条公式计算
            let num = parseFloat(arr[i][1]);
            arr[i][1] = (num * 1.09).toFixed(2);
        }
        console.log(arr[i][1]);
    }


    process.exit(0);


});

