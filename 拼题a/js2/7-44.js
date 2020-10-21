const { doesNotReject } = require('assert');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
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
    function getP5(str){
        var p = [], 
            mx = 0,
            id = 0;
        var i;
        // 将字符串转化为奇数长度获取到新的字符串
        var newStr = '#';
        var len = str.length;
        for(i = 0;i<len;i++){
            newStr += str[i]+'#';
        }
        var newLen = newStr.length;
        for(i = 0;i<newLen;i++){
            p[i] = 0;
        }
        // 时间复杂度为O(n)，空间复杂度为O(1)获取到所有的子回文的长度值组成的数组
        for (i = 0;i < newLen; i++) {
            // mx表示当前边界值最大的回文子串的边界值
            p[i] = mx > i ? Math.min(p[2*id-i], mx-i) : 1;
            // 超出其半径的位置再做额外判断
            while ((newStr[i + p[i]] == newStr[i - p[i]]) && newStr[i + p[i]]){
                p[i]++;
            }
            // 获取到边界最大的回文子串的中心位置以及边界值，以保证后续迭代可以做以上快捷处理
            if (i + p[i] > mx) {
                id = i;
                mx = id + p[i];
            }
        }
        return Math.max(...p)-1;
    }
    console.log(getP5(input));    
    process.exit(0);

});


