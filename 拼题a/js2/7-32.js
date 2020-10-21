const { doesNotReject } = require('assert');
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
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].split(" ");
        for (let j = 0; j < input[i].length; j++) {
            input[i][j] = parseInt(input[i][j]);
        }
    }
    let num = parseInt(input[0][0]) + 1;
    if (input[0][1] != input[num][0]) {
        console.log("Error: " + input[0][1] + " != " + input[num][0]);
    } else {
        for (let j = 1; j <= input[0][0]; j++) {
            arr1.push(input[j]);
        }

        let num2 =parseInt(input[0][0])+2;
        for (let j = num2; j < input.length; j++) {
            arr2.push(input[j]);
        }


        for (let j = 0; j < input[num][1]; j++) {
            let arr = [];
            for (let i = 0; i < arr2.length; i++) {
                arr.push(arr2[i][j]);
            }
            arr3.push(arr);
        }
        console.log(input[0][0]+" "+input[num][1]);
    }
    
    for (let i = 0; i < arr1.length; i++) {
        let str = "";
        
        for (let k = 0; k < arr3.length; k++) {
            let num1 = 0;
            for (let j = 0; j < arr3[k].length; j++) {
                num1 += arr1[i][j] * arr3[k][j];
                // console.log(num1);
            }
            str += num1+" ";
        }
        console.log(str.trim())

    }
    

    // console.log(arr1);
    // console.log(input);
    // console.log(arr2);
    // console.log(arr3);
    process.exit(0);
});

