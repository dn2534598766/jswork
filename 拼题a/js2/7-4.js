const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,

//   output: process.stdout,

});

let buf ="";


rl.on('line', (line) => {

    if (line.trim()=="") rl.close()

    //buf数组是命令行输入的信息

    buf = line;

})



rl.on('close', () => {

    //算法写在这里，用console.log()输出

    //需要读取命令行输入的话，使用buf变量

    let input = buf;

    var aa = input.split("");
    var temp={};
    for(let i = 0;i<aa.length;i++){
        if(!temp[aa[i]]){
            temp[aa[i]] = 1;
        }else{
            temp[aa[i]]++;
        } 
    
    }
    // console.log(temp);
    for (var item in temp){
        console.log(item+":"+temp[item]);
    }
    process.exit(0);

});