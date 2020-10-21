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
    var male = [],
        girl = [];
    for(let i =1;i<input.length;i++){
        input[i] = input[i].split(" ");
        if(input[i][0] == 0){
            girl.push(input[i]);
        }else{
            male.push(input[i])
        }
    }

    let len = (input.length-1)/2;
    let num =len-1;
    let num1 =len-1;
    // console.log(len);
    for(let i=1;i<=len;i++){
        if(input[i][0] == '0'){
            console.log(input[i][1] +" "+ male[num][1]);
            num--;
        }else if(input[i][0] == '1'){
            console.log(input[i][1] + " "+girl[num1][1]);
            num1--;
        }
        // console.log(num);
    }

    // console.log(male);
    // console.log(girl);
    // console.log(input);
    process.exit(0);
});

