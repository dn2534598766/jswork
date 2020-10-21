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
    var a =input[0].split(" ");
    var b =input[1].split(" ");
    var num1 =parseInt(a[0]);
    var num2 =parseInt(a[1]);
    var c =num1;
    var d =num2;
    var win ="";
    var winnum =0;
    var apan = 0;
    var bpan =0;

    for(let i =0;i<b.length;i++){
        if(b[i]== 0){
            c++;
            apan++;
        }else{
            d++;
            bpan++;
        }
    }

    if(c>d && bpan !=3){
        win ='a';
        winnum =apan;
        zuizhong = num1;
    }else{
        win ='b';
        winnum =bpan;
        zuizhong = num2;
    }

    console.log("The winner is "+ win +": "+zuizhong+" " + "+ "+winnum);
    process.exit(0);

});

