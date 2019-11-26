(function(window){
    var FormBuilder=function(data){
        this.data=data;
    };
    FormBuilder.prototype.create=function(){
        var html='';
        for(var k in this.data){
            var item={tag:'',text:'',attr:{},option:null};
            for(var n in this.data[k]){
                item[n]=this.data[k][n];
            }
            html+=FormBuilder.toHTML(item);
        }
        return '<table>'+html+'</table>';
    };
    var builder={
        toHTML:function(obj){
            var html=this.item[obj.tag](this.attr(obj.attr),obj.option);
            return '<tr><th>'+obj.text+'</th><td>'+html+'</td></tr>';
        },
        attr:function(attr){
            var html='';
            for(var k in attr){
                html+=k+'="'+attr[k]+'" ';
            }
            return html;
        },
        item:{
            input:function(attr,option){

            
            }
        }
    }
})