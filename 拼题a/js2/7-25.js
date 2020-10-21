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
    if(input.length >13){//如果数组长度大于13，就打印下面这段
        console.log(input[1]+" and "+input[13]+" are inviting you to dinner...")
    }else if(input.length>1 && input.length<14){//如果数组长度大于1小于14
        if(input[1] !="."){//如果第二位是“.”,就打印下面这段
            console.log(input[1]+" is the only one for you...");
        }else{//否则就打印下面这段
            console.log("Momo... No one is for you ...");
        }
    }else if(input.length <2){//如果数组长度小于2,就打印下面这段
        console.log("Momo... No one is for you ...")
    }

    process.exit(0);

});
