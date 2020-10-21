const { format } = require('path');
const { config } = require('process');
const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,

    //   output: process.stdout,

});

let buf = [];


rl.on('line', (line) => {

    if (line.trim() == "") rl.close()

    //buf数组是命令行输入的信息

    buf.push(line);

})



rl.on('close', () => {

    //算法写在这里，用console.log()输出
    const lcm = (...arr) => {
        const gcd = (x, y) => (!y ? x : gcd(y, x % y));
        const _lcm = (x, y) => (x * y) / gcd(x, y);
        return [...arr].reduce((a, b) => _lcm(a, b));
      };

    //需要读取命令行输入的话，使用buf变量
    let input = buf[1]; //获取输入
    input = input.split(" ");
    let fm =[];
    let yuefen;
    let zheshu;
    let fenzi;
    let fenmu;
    for(let i =0;i<input.length;i++){
        input[i] = input[i].split("/");
        for(let j=0;j<input[i].length;j++){
            input[i][j]=parseInt(input[i][j]);
        }
        fm.push(input[i][1]);
    }

    let zg =lcm(...fm);
    let fz=0;
    // console.log(input);
    for(let i =0;i<input.length;i++){
        input[i][0] = input[i][0]*(zg/input[i][1]);
        fz += input[i][0];
    }

    let num = fz/zg;
    // console.log(fz);
    // console.log(zg);
    if(num%1 === 0){
        zheshu =num;
        console.log(zheshu+"");
    }else{
        zheshu = parseInt(num);
        yuefen = fz -(zheshu*zg);
        let yueshu = gcd1(yuefen,zg);
        fenzi = yuefen/yueshu;
        fenmu = zg/yueshu;
        if(zheshu>0){
            console.log(zheshu +" "+fenzi+"/"+fenmu)
        }else{
            console.log(+fenzi+"/"+fenmu)
        }
    }
    // function gcd(a, b) {
    //     var minNum = Math.min(a, b), maxNum = Math.max(a, b), i = Math.floor(maxNum / minNum), vper = 0;
    //     if (a === 0 || b === 0) {
    //         return maxNum;
    //     }

    //     for (; i <= maxNum; i++) {
    //         vper = minNum * i;
    //         if (vper % maxNum === 0) {
    //             return vper;
    //         }
    //     }
    // }

    // //求一个数组的最下公倍数
    // function gcds(arr) {
    //     var onum = 0, i = 0, len = arr.length, midNum = 0;
    //     for (; i < len; i++) {
    //         onum = Math.floor(arr[i]);//去掉小数
    //         midNum = gcd(midNum, onum);
    //     }
    //     return midNum;
    // }

    function gcd1(a,b){
        if(b == 0){
          return a;
        }
        var r = a % b;
        return gcd1(b,r);
      }


      
     

    process.exit(0);


});


