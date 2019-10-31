function monkey(){
    let total=document.getElementById("mokeytotal").value
    let kick=document.getElementById("mokeykick").value
    total=parseInt(total)&&Number(total)
    kick=parseInt(kick)&&Number(kick)
    if(isNaN(total)||isNaN(kick)){
        alert('请输入数字')
        return
    }
    let monkey=[]
    for(let i=1;i<=total;i++){
        monkey.push(i)
    }
    let i=0
    while(monkey.length>1){
        i++;
        head=monkey.shift()
        if(i%kick!=0){
            monkey.push(head)
        }
    }
    document.getElementById('monkeyking').innerText=monkey[0]
}
function stat(){
    let str=document.getElementById('str').value
    let obj={}
    var array=str.split('')
    for(var i=0,l=str.length;i<l;i++){
        obj[str[i]]=(obj[str[i]]+1)||1
    }
    document.getElementById('result').innerText=JSON.stringify(obj)
}