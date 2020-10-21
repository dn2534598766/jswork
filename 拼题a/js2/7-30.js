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
    let num = parseInt(input[0])+1;
    let arr =[];
    for(let i =1;i<input.length-1;i++){
        if(i%num == 0){
            arr.push(input[i]);
        }else{
            if(input[i] == "ChuiZi"){
                arr.push("Bu");
            }else if(input[i] == "JianDao"){
                arr.push("ChuiZi");
            }else{
                arr.push("JianDao");
            }
        }
        
    }

    for(let i = 0;i<arr.length;i++){
        console.log(arr[i]);
    }

    process.exit(0);

});

