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
    var arr=[];
    var arr2 =[];

    for(let i = 1;i<=input.length;i++){
        arr.push(String(input[i]).split(" "));
    }
    
    for(let i = 0;i<arr.length;i++){
        let a = arr[i][1];
        let b = arr[i][2];
        if(a<15 || a>20 || b<50 || b>70){
            arr2.push(arr[i]);
        }
    }

    for(let i = 0;i<arr2.length;i++){
        console.log(arr2[i][0]);
    }

    // console.log(arr2);
    process.exit(0);

});

