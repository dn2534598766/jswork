const { config } = require('process');
const readline = require('readline');
const { setTimeout } = require('timers');

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
    var input = buf; //获取输入
    var yuanlai = [];
    let option = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
    let obj =["1","0","X","9","8","7","6","5","4","3","2"];
    let arr =[];
    let cuo =[];
    for (let i = 1; i < input.length; i++) {
        yuanlai.push(input[i]);
        input[i] = input[i].split("");
        let count =0;
        for (let j = 0; j < input[i].length-1; j++) {
            if(input[i][j] == "X" || isNaN(input[i][j])){
                count ++;
            }else{
                input[i][j] = parseInt(input[i][j])
            }
        }
        if(count == 0){
            arr.push(input[i]);
        }else{
            cuo.push(input[i])
        }
    }

    for(let i =0;i<arr.length;i++){
        let sum=0;
        let len = arr[i].length-1;
        for(let j=0;j<len;j++){
            let num =arr[i][j]*option[j];
            sum +=num;
        }
        sum = sum%11;
        if(arr[i][len] != obj[sum]){
            cuo.push(arr[i]);
        }
    }
    if(cuo.length == 0){
        console.log("All passed");
    }else{
        for(let i = 0;i<cuo.length;i++){
            cuo[i] = cuo[i].join("");
        }
        for(let i =0;i<yuanlai.length;i++){
            let str;
            for(let j =0;j<cuo.length;j++){
                if(yuanlai[i] == cuo[j]){
                    str = yuanlai[i];
                }
            }
            if(str != undefined){
                console.log(str);
            }
        }
    }
    process.exit(0);
});

