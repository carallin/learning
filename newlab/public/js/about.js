$(function () {
  $('#menu').on('click', 'li', function (e) {
    console.log(e.target);
    console.log($(e.target).attr("href"));
    var id = $(e.target).attr('href');
    var items = $('#article').find('.item');

    //改部分将导师和其他人分开了
    if (id == '#mentor') {
      items.each(function () {
        var currentId = '#' + $(this).attr('id');
        if (currentId == '#mentor') {
          $(this).removeClass('hidden');
        }else {
          $(this).addClass('hidden');
        }
      });
    }
    else {
      items.each(function () {
        $(this).removeClass('hidden');
      });
      $('#mentor').addClass('hidden');
    };


    // 这个是将每个菜单和内容单独显示的。
    // items.each(function () {
    //   var currentId ='#' + $(this).attr('id');
    //   if (currentId == id) {
    //     $(this).removeClass('hidden');
    //   }else {
    //     $(this).addClass('hidden');
    //   }
    // });

  })
});


$(function () {
  //在读学生------------------
  var str1 = '';
  students.forEach(function (item,index) {
    var temp = '', list = '',temp1 = '';
    // if (item.before1) {
    //   temp += '<li>学士：' + item.before1 + '</li>';
    // }
    // if (item.before2) {
    //   temp += '<li>硕士：' + item.before1 + '</li>';
    // }
    if (item.study) {
      temp += '<li>研究兴趣：' + item.study + '</li>';
    }
    if (item.other) {
      temp1 += '<li> ' + item.other + '</li>';
    }

    list += '<li>' + item.name + '</li><li>' + item.now + '</li>' + '</li><li>' + item.year + '年加入实验室</li>'
    + temp + temp1;
    str1 += '<div class="people small"><img class="photo" src="'+ item.src + '" alt="photo">' + '<div class="info"><ul>'
    + list + '</ul></div></div>';
  });
  $('#students-box').html(str1);

//已经毕业的学生们------------------
  var str2 = '';
  studentsFormer.forEach(function (item,index) {
    var temp = '', list = '', company = '';
    // 本科的学校
    if (item.before1) {
      temp += '<li>学士：' + item.before1 + '</li>';
    }
    // 硕士的学校
    if (item.before2) {
      temp += '<li>硕士：' + item.before1 + '</li>';
    }
    if (item.study) {
      temp += '<li>研究方向：' + item.study + '</li>';
    }
    if (item.other) {
      temp += '<li> ' + item.other + '</li>';
    }
    if (item.company) {
      company += '<li>去向：' + item.company + '</li>';
    }
    list += '<li>' + item.name + '</li><li>攻读：' + item.degree + '</li>' + '</li><li>'
    + item.year1 + '年加入实验室（' + item.year2 + '年毕业）</li>' + company + temp;
    str2 += '<div class="people small"><img class="photo" src="'+ item.src + '" alt="photo">' + '<div class="info"><ul>'
    + list + '</ul></div></div>';
  });
  $('#students-former-box').html(str2);
});
