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
    let a = parseInt(input[0]);
    let b = String(input[1]);
    var arr =[];

    for(let i =0;i<b.length;i++){//读取输入内容
        if(i%a ==0 || i==0){//从0开始，每遇到输入条件就截取放入数组
            var temp =b.slice(i,i+a);
            arr.push(temp);
        }
    }

    for(let i =0;i<arr.length;i++){//遍历数组
        let j = a - arr[i].length;//声明j=条件减去数组每一位长度
        let str= ""
        for(let i = 0;i<j;i++){//最后一个数组成员长度不够就加上去
            str +=" ";
        }
        if(arr[i].length<a){
            arr[i] +=str;
        }
    }

    for(let i = 0;i<arr.length;i++){
        arr[i] = arr[i].split("");//把每一位数组成员拆成新的数组
    }

    // var len = arr[i]

    for(let i = 0;i<a;i++){ //打印出数组成员
        let str="";
        for(let j = arr.length-1;j>=0;j--){
            str += arr[j][i];
            // console.log(j);
        }
        console.log(str);
        
    }


    
 


});

