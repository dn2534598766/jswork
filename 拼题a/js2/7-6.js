const { doesNotReject } = require('assert');
const { timeStamp } = require('console');
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

    buf=line;

})



rl.on('close', () => {

    //算法写在这里，用console.log()输出

    //需要读取命令行输入的话，使用buf变量
    let n = parseInt(buf); //获取输入
    let temp;
    let count = 0,maxcount =0,start =0
    let num = Math.sqrt(n);
    for(let i =2;i<=num;i++){
        temp =n;
        count =0;
        let j =i;
        while(temp%j == 0){
            temp /= j++;
            count++;
        }
        if (count > maxcount) {
			maxcount = count;
			start = i;
		}
    }
    if (maxcount) {
        console.log(maxcount);
        let str="";
		for (let i = 0; i < maxcount; i++) {
			str += start+i
			if (i != maxcount - 1){
                str +="*";
            }
        }
        console.log(str);
    }else{
        console.log("1" +"\n" +n);
    }
    process.exit(0);
});

