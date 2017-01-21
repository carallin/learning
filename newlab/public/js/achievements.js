
$(function () {
  // $.getJSON('patents.json',function (data) {
  // });
  var str1 = '';
  patentsOuter.forEach(function (item,index) {
    str1+='<li><p>'+ item.name + '<a class="download" href="' + item.src + '" + target="_blank"><span class="icon-file-text2"></span></a>'
    + '</p><p class="small-p">发明人：' + item.author + '&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp授权号：' + item.number
    + '</p>';
  });
  $('#patents-outer').html(str1);

  var str = '';
  patents.forEach(function (item,index) {
    str+='<li><p>'+ item.name + '<a class="download" href="' + item.src + '" + target="_blank"><span class="icon-file-text2"></span></a>'
    + '</p><p class="small-p">发明人：' + item.author + '&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp授权号：' + item.number
    + '</p>';
  });
  $('#patents-inner').html(str);

  var str3 = '';
  var papersYearLen = papersYear.length;
  for (var i = 0; i < papersYearLen; i++) {
    str3 += '<h4>' + papersYear[i] + '</h4><ol>';
    papers[i].forEach(function (item,index) {
      str3 += '<li><p>'+ item.name + '<a class="download" href="' + item.src + '" + target="_blank"><span class="icon-file-text2"></span></a>'
      + '<br/>author: ' + item.author + '&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp<i>"' + item.express +'"</i></p></li>';
    });
    str3 += '</ol>';
  }
  $('#paper-box').html(str3);
});
