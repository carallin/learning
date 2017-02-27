$(function () {
  var currentIndex = 0;
  var images = $('.image-list .image-item');
  var len = images.length;

  var str = '<ul><li class="index-item current-index"></li>';
  for (var i = 0; i < len - 1; i++) {
    str += '<li class="index-item"></li>';
  }
  str += '</ul>';
  $('#index-list').html(str);

  var indexs = $('.index-list .index-item');

  indexs.each(function (index) {
    $(this).hover(function () {
      //第一种方法：将changeTo直接写在程序中：
      // if (currentIndex != index) {
      //   $(indexs[currentIndex]).removeClass('current-index');
      //   $(images[currentIndex]).fadeOut('fast');
      //   $(images[index]).fadeIn('normal');
      //   $(this).addClass('current-index');
      //   currentIndex = index;
      // }

        changeTo(index,currentIndex);
        currentIndex = index;
    });
  });

  var autoChange = setInterval(function () {
    var index = currentIndex;
    if (currentIndex < len-1) {
      currentIndex++;
    }else {
      currentIndex = 0;
    }
    changeTo(currentIndex, index);
  },5000);

//设置当滑入滑出显示区时的动作
  $('#image-panel').hover(function () {
    clearInterval(autoChange);
    $('#direction').removeClass('hidden');
  },function () {
    $('#direction').addClass('hidden');
    autoChange = setInterval(function () {
      var index = currentIndex;
      if (currentIndex < len-1) {
        currentIndex++;
      }else {
        currentIndex = 0;
      }
      changeTo(currentIndex, index);
    },5000);
  });

  $('#direction').on('click','li',function (e) {
    if ($(e.target).attr('id') == $('#go-left').attr('id')) {
      var index = currentIndex;
      if (currentIndex > 0) {
        currentIndex--;
      }else {
        currentIndex = len - 1;
      }
      changeTo(currentIndex, index);
    }else if ($(e.target).attr('id') == $('#go-right').attr('id')) {
      var index = currentIndex;
      if (currentIndex < len-1) {
        currentIndex++;
      }else {
        currentIndex = 0;
      }
      changeTo(currentIndex, index);
    }
  })

});

function changeTo(index,currentIndex) {
  var images = $('.image-list .image-item');
  var indexs = $('.index-list .index-item');
  if (currentIndex != index) {
    $(indexs[currentIndex]).removeClass('current-index');
    $(images[currentIndex]).hide('fast');
    $(images[index]).show('slow');
    $(indexs[index]).addClass('current-index');
  }
};
