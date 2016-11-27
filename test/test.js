window.onload=loadPage();
function loadPage() {
    autoComplete();
  // createTable(10,10);
  // fun();
}
var obj = {
    ':wys' : '王云松@163.com,tianxiang@163.com',
    ':tx' : '田响',
    ':zlj' : '张利剑',
    ':qpl' : 'lijianzhang@gmail.com;tianxiangnju@163.com;yunsong_wang@163.com;carallin_t@163.com'
}

function autoComplete() {
    var input = document.getElementById('input1');
    var originValue = input.value;
    input.addEventListener('keyup',function (event) {
        var name = input.value;
        if (name.lastIndexOf(';')>0) {
            var start = name.lastIndexOf(';');
            name = name.slice(start+1);
        }

        if (obj.hasOwnProperty(name)) {
            console.log(obj[name]);
            if(!originValue){
                input.value = obj[name];
            }else {
                input.value = originValue + ';' + obj[name];
            }
            originValue = input.value;
        }

    })
}




function createTable(rows,lines){
    this.rows=rows;
    this.lines=lines;
    // var result=document.getElementById('result');
    var result = document.getElementsByTagName('body');
    var Table=document.createElement('table');//创建table标签元素
    Table.setAttribute('border','1');
    //给table标签添加其他属性
    for(var i=0;i<this.rows;i++){
        var lRow=document.createElement('tr');
        for(var j=0;j<this.lines;j++){
            var textNode=document.createTextNode(i+','+j);
            var lLine=document.createElement('td');
                lLine.appendChild(textNode);
            lRow.appendChild(lLine);
        }
        Table.appendChild(lRow);
    }
    result[0].appendChild(Table);
}
function fun() {
  console.log(document.getElementsByTagName('table'));
  console.log(document.getElementsByTagName('tr').length);
}
