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
    var a =input[0].split("");//获取第一行字符串
    var b =input[1].split("");//获取要去除的字符串并转为数组

    var temp ={};//声明一个对象
    var arr =[];//声明一个数组
    var str ="";//声明一个字符串
    for(let i=0;i<b.length;i++){//遍历数组并把值放到对象里
        if(!temp[b[i]]){
            temp[b[i]] = 1;
        }
    }

    for(let i =0;i<a.length;i++){
        if(!temp[a[i]]){
            arr.push(a[i]);
        }
    }

    for(let i=0;i<arr.length;i++){
        str +=arr[i];
    }

    console.log(input);
    console.log(str);
    process.exit(0);
});

