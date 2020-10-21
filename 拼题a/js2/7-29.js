const { config } = require('process');
const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
});

let buf = [];


rl.on('line', (line) => {

    if (line.trim() == "") rl.close()
    buf.push(line);

})
rl.on('close', () => {
    let n =Number(buf[0]),ls=0,cs=0,lsary=[],t=[],t1=0,t2=0,t3=0,str="",k=0,sum=0,bug=0;
    buf=buf.splice(1)
    for (let i=0;i<buf.length;i++){
        buf[i] = buf[i].split(" ")
    }
    for (let i=0;i<n;i++){
        sum=0,lsary=[],k=0
        for (let j=ls;j<buf.length;j++){
            t = buf[j][2].split(":");
            t1 = Number(t[0]) * 60 + Number(t[1]);
            if(buf[j][0]==0){
                if(k==0){
                    str += k + " " +0 +"\n";
                }else{
                    str += k + " " +Math.round(sum/k) +"\n";
                }
                ls = j + 1;
                break
            }else if (buf[j][1]=='S'){
                if(lsary[buf[j][0]]!=buf[j][0]){
                    lsary[buf[j][0]] =t1;
                }

            }else if(buf[j][1]=='E'){
                if (lsary[buf[j][0]]!=null){
                    sum += t1 - lsary[buf[j][0]];
                    lsary[buf[j][0]]=null;
                    k++;
                }
            }
        }
    }
    console.log(str.trim("\n"))
});

