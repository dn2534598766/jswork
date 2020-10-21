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
    let input = buf.split(""); //获取输入
    var str = "";
    var obj = {
        0: "ling",
        1: "yi",
        2: "er",
        3: "san",
        4: "si",
        5: "wu",
        6: "liu",
        7: "qi",
        8: "ba",
        9: "jiu",
        "-": "fu"
    }

    for (let i = 0; i < input.length; i++) {
        if (obj[input[i]]) {
            str += obj[input[i]] +" ";
        }
    }


    console.log(str.trim());

    process.exit(0);

});

