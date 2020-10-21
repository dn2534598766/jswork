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
    let temp={};//声明一个变量
    var arr=[0,0];//声明一个数组，并存进两个值
    for(let i =1;i<input.length;i++){//遍历数组
        input[i] = input[i].split(" ");//把数组成员以空格拆分
        for(let j=1;j<input[i].length;j++){//再遍历以空格拆分的数组成员
            if(!temp[input[i][j]]){//如果对象没有这个属性，就放到这个对象并赋值1
                temp[input[i][j]] =1;
            }else{//否则对象属性值值+1
                temp[input[i][j]]++;
            }
        }
    }

    let len = Object.keys(temp); //声明一个变量，并且将对象转为数组
    for(let i = 0;i<len.length;i++){//遍历这个数组
        if(temp[len[i]] >arr[1] || temp[len[i]] ==arr[1]){//如果对象属性值大于arr第二位或者等于第二位，就把对象属性放到arr数组第一位，把对象属性值放到arr数组第二位
            arr[0] = len[i];
            arr[1] = temp[len[i]]; 
        }
    }

    console.log(arr[0] +" "+arr[1]);

    // console.log(arr);
    // console.log(input);
    // console.log(temp);
    process.exit(0);

});

