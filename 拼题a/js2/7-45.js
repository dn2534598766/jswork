const { doesNotReject } = require('assert');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
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
    let num =0;
    let arr =[];
    let obj={};
    let n = parseInt(input[0]);
    for(let i =1;i<input.length;i++){
        input[i] = input[i].split(" ");
        let n = parseInt(input[i][1]);
        num += n;
    }

    num =num/n/2;
    // console.log(input)

    for(let i =1;i<input.length;i++){
        let n = parseInt(input[i][1]);
        let sub = parseInt(n-num);
        if(!obj[sub]){
            obj[sub] =input[i][0];
        }
        
    }
    arr=Object.keys(obj)
    console.log(parseInt(num)+" "+obj[arr[0]]);

    process.exit(0);

});


