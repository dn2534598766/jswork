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
    let input = buf.split(" "); //获取输入
    let apl =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
    let L = parseInt(input[0]);
    let N = parseInt(input[1]);
    let Pos = Math.pow(26, L) - N;
    let index = new Array(L); 
    // console.log(input);
    // index.length = L;
    for (let i = 0; i < L; ++i) {
		index[i] = parseInt(Pos % 26);
        Pos /= 26;
        // console.log(index[i]);
    }
    let str="";
    for (let i = L - 1; i >= 0; --i){
        str += apl[index[i]] ;
    }


    console.log(str);
    // var ConvertNum = function (str) {
    //     var n = 0;
    //     var s = str.match(/./g);//求出字符数组
    //     var j = 0;
    //     for (var i = str.length - 1, j = 1; i >= 0; i--, j *= 26) {
    //         var c = s[i].toUpperCase();
    //         if (c < 'A' || c > 'Z') {
    //             return 0;
    //         }
    //         n += (c.charCodeAt(0) - 64) * j;
    //     }
    //     return n;
    // }
    // //测试
    // var teststr = "AB";
    // console.log(ConvertNum(teststr));
    //将10进制转26进制
    // var Convert26 = function (num) {
    //     var str = "";
    //     while (num > 0) {
    //         var m = num % 26;
    //         if (m == 0) {
    //             m = 26;
    //         }
    //         str = String.fromCharCode(m + 64) + str;
    //         num = (num - m) / 26;
    //     }
    //     return str;
    // }
    // console.log(Convert26(19)) 
    // console.log(ConvertNum("a"))
    process.exit(0);
});

