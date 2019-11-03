function goldbach(){
    var str=[]
    var odd=parseInt(document.getElementById('odd').value)
    if(odd<=2||(odd%2!=0)){
    alert('请输入一大于2的偶数')
   }
   for(let j=2;j<=odd/2;j++){
       for(var i=2;i<j;i++){
            if(j%i==0)
            break
       }
       if(i==j){
           var sum=odd-i;
           for(var k=2;k<sum;k++){
               if(sum%k==0){
                   break
               }
           }
           if(sum==k){
            str += odd + "可以被拆分为两个素数" + j + "和"+sum + "的和\n"
           }
       }
   }
   document.getElementById('goldbach').innerText=str
}
