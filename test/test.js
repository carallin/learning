window.onload=loadPage();
function loadPage() {
  // createTable(10,10);
  // fun();
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
