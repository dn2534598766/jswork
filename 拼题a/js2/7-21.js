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
    let input = Number(buf); //获取输入
    
    var sut = 2*((input-100)*0.9);
    var str="";

    if(sut%1 ===0){
        str = sut+".0";
    }else{
        var temp = String(sut).split(".");
        var num2 = temp[1].split("");
        var str = temp[0]+"."+num2[0];
    }

    
    console.log(str);


    process.exit(0);

});

