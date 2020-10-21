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
    let input = buf.split(" "); //获取输入
    let a = parseInt(input[0]);
    let b = parseInt(input[1]);
    let arr = [];
    let sut = 0;
    let str = "";
    var arr2 =[];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }

    for (let i = 0; i < arr.length; i++) {
        sut += arr[i];
        arr2.push(String(arr[i]));
    }

    for(let i = 0;i<arr2.length;i++){
        if(arr2[i].length<5){
            let len =arr2[i].length;
            let str=" ";
            for(let i=0;i<5-len-1;i++){
                str +=" ";
            }
            arr2[i] =str+arr2[i];
        }
    }

    for(let i=0;i<arr2.length;i++){
        str += arr2[i];
    }
    // console.log(str);

    var arr3 =[];

    for(let i =0;i<str.length;i++){//读取输入内容
        if(i%25 ==0 || i==0){//从0开始，每遇到输入条件就截取放入数组
            var temp =str.slice(i,i+25);
            arr3.push(temp);
        }
    }

    for(let i =0;i<arr3.length;i++){
        console.log(arr3[i]);
    }

    // console.log(arr3);
    // console.log(arr2);
    console.log("Sum = " + sut);

    process.exit(0);

});

