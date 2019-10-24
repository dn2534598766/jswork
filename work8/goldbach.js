function goldbach(){
    var odd=parseInt(document.getElementById('odd').value)
    if(isNaN(odd)||odd<=2||odd%2==1){
        alert('请输入一大于2的偶数')
        return false
    }  
    result.value=(odd)
}

    for(var i=1;i<=a;i++){
        if(a%i==0){
            sum++
        }
    }
    if(sum==2){
        return true
    }else{
        return false
    }
