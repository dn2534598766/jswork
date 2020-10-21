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
    var num = parseInt(input[0]);
    var arr=[];//考生
    var arr2=[];//要获取的考生试机数字
    var arr3=[];//最终的考生名单

    var option = input[input.length-1];
    arr2 = option.split(" ");

    for(i=1;i<=num;i++){
        let temp = String(input[i]).split(" ");
        arr.push(temp);
    }
    
    for(let i =0;i<arr2.length;i++){
        for(let j = 0;j<arr.length;j++){
            if(arr2[i] == arr[j][1]){
                arr3.push(arr[j]);
            }
        }
    }

    for(let i =0;i<arr3.length;i++){
        console.log(arr3[i][0]+" "+arr3[i][2]);
    }

    // console.log(arr3);
    // console.log(arr2);
    // console.log(input);

    process.exit(0);
});

