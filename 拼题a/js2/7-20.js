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
    var len = input.length;

    function prime(n) {
        let i, t;
        t = Math.sqrt(n);
        if (n == 1)
            return 0;
        else
            for (i = 2; i < t; i++)
                if (n % i == 0)
                    return 0;
        return 1;
    }

    for(let i =1;i<input.length;i++){
        let a =parseInt(input[i]);
        if(prime(a) ==1){
            console.log("Yes")
        }else{
            console.log("No")
        }
    }
    // for (let i = 1; i < len; i++) {
    //     let num;
    //     let a = parseInt(input[i]);
    //     for (var j = 1; j < a; j++) {
    //         if (a % j == 0) {
    //             count++;
    //             if (count > 2) {
    //                 continue;
    //             }
    //         }
    //     }
    //     if (count == 2) {
    //         console.log("Yes");
    //     } else {
    //         console.log("No");
    //     }
    // }
    // console.log(input);
    process.exit(0);

});
