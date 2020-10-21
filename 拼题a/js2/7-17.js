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
    let input = buf.split(":"); //获取输入
    let a =input[0];
    let b =input[1];
    let h = parseInt(input[0]);
    let m = parseInt(input[1]);
    if (h < 12) {
        console.log("Only " + a + ":" + b + ".  Too early to Dang.");
    } else if ((h == 12) && (m == 0)) {
        console.log("Only " + a + ":" + b + ".  Too early to Dang.");
    } else {
            let i = 0;
            let str="";
            if (m == 0) {
                for (i; i < h - 12; i++) {
                    str += "Dang";
                }
            }else {
                for (i; i < h - 11; i++) {
                    str += "Dang";
                }
            }
            console.log(str);
    }
    // var str = "";
    // var a = parseInt(input[0]);
    // var b = parseInt(input[1]);

    // if (a == 12 && b > 0) {
    //     if (b > 0) {
    //         str = "Dang";
    //     }
    //     for (let i = 0; i < a - 12; i++) {
    //         str += "Dang";
    //     }
    // } else if (a > 12) {
    //     if (b > 0) {
    //         str = "Dang";
    //     }
    //     for (let i = 0; i < a - 12; i++) {
    //         str += "Dang";
    //     }
    // } else {
    //     console.log("Only " + input[0] + ":" + input[1] + "."  + " Too early to Dang.")
    // }

    // console.log(str.trim());
    // console.log(input)
    process.exit(0);

});

