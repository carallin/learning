$(function () {
  console.log('hello');
  var str = '';
  // $.getJSON('patents.json',function (data) {
  //   str = data;
  //   // data.forEach(function (item,index) {
  //   //   str+='<li><p>'+ item.name + '</p><p>发明人:' + item.author + '&nbsp&nbsp&nbsp&nbsp专利授权号：' + item.number + '</p>';
  //   // });
  // });
  var str1 = '';
  patentsOuter.forEach(function (item,index) {
    str1+='<li><p>'+ item.name + '<a class="download" href="' + item.src + '"><span class="icon-file-text2"></span></a>'
    + '</p><p class="small-p">发明人：' + item.author + '&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp授权号：' + item.number
    + '</p>';
  $('#patents-outer').html(str1);
  });

  patents.forEach(function (item,index) {
    str+='<li><p>'+ item.name + '<a class="download" href="' + item.src + '"><span class="icon-file-text2"></span></a>'
    + '</p><p class="small-p">发明人：' + item.author + '&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp授权号：' + item.number
    + '</p>';
  $('#patents-inner').html(str);
  });
});
