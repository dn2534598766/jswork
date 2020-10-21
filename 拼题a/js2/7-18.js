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
    let num = 0,
        num1 = 0;
    let win;
    let sut;
    let a = parseInt((input[0].split(" "))[0]),
        b = parseInt((input[0].split(" "))[0]);
    for (let i = 2; i < input.length; i++) {
        input[i] = input[i].split(" ");
        for (let j = 0; j < input[i].length; j++) {
            input[i][j] = parseInt(input[i][j]);
        }
    }


    for (let i = 2; i < input.length; i++) {
        if (input[i][1] == input[i][0] + input[i][2] && input[i][3] != input[i][0] + input[i][2]) {
            num++;
        } else if (input[i][3] == input[i][0] + input[i][2] && input[i][1] != input[i][0] + input[i][2]) {
            num1++;
        }
        if (num > a) {
            win = "A";
            sut = num1;
            break;
        } else if (num1 > b) {
            win = "B";
            sut = num;
            break;
        }
    }
    console.log(win + "\n" + sut);
    // console.log(input);
    process.exit(0);
});

