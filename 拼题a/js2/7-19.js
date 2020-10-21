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
    let input = buf; //获取输入
    let arr = input.split("");
    let arr2 = arr;
    var temp ={};
    var sut = [];
    var str ="";
    var str2 ="";


    for(var i =0;i<arr.length;i++){ //把号码去重放进一个对象
        if(!temp[arr[i]]){
            temp[arr[i]] = arr[i];
        }
    }

    let len = Object.keys(temp);//把对象转为数组
    for(var i =0;i<len.length;i++){//遍历数组，并转为int数字类型
        len[i] = parseInt(len[i]);
    }

    len.sort(function (a,b) {  //把数组从大到小排列
        return b-a;
    })
    for(let i =0;i<arr2.length;i++){ //把号码数组遍历并转为int类型
        arr2[i] = parseInt(arr2[i]);
    }


    for(let i =0;i<arr2.length;i++){        //如果号码数组跟数组1的数字相同，把号码在数字1的位置添加到新的数组
        for(let j =0;j<len.length;j++){ 
            if(arr2[i] == len[j]){
                sut.push(j);
            }
        }
    }

    for(let i =0;i<len.length;i++){ //把去重数组1转为字符串
        if(i == len.length-1){
            str = str+String(len[i]);
        }else{
            str = str+String(len[i])+",";
        }
    }

    for(let i = 0;i<sut.length;i++){//把号码位置数组转为字符串
        if(i == sut.length-1){
            str2 += String(sut[i]);
        }else{
            str2 += String(sut[i])+",";
        }
    }

    console.log("int[] arr = new int[]{"+str+"};");
    console.log("int[] index = new int[]{"+str2+"};");
    process.exit(0);
});

