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
    let input = buf[1].split(" "); //获取输入
    let obj={};
    for(let i= 0;i<input.length;i++){
        if(!obj[input[i]]){
            obj[input[i]] =1;
        }else{
            obj[input[i]]++;
        }
    }
    console.log(obj);
    for(var key in obj){
        console.log(key+":"+obj[key]);
    }
   
    process.exit(0);

});

