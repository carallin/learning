$(function(){
  var aside = $('#aside');
  var hintTop = $('#hint-top');
  var win = $(window);
  var doc = $(document);
  var headerHeight = $('#header').height();
  var items = $('#article').find('.item');
  var menu = $('#menu');

  win.scroll(function () {
    var top = doc.scrollTop();
    //make menu and tip fixed
    if (top >= headerHeight) {
      aside.addClass('fixed-aside');
      hintTop.removeClass('hidden');
    }else {
      aside.removeClass('fixed-aside');
      hintTop.addClass('hidden');
    };

    //make menu and items in article 一致
    var currentId = '';
    items.each(function () {
      if (!$(this).hasClass('hidden')) {
        if (top > $(this).offset().top - 150) { //根据实际情况决定在合适判定当前页面内容
          currentId = '#' + $(this).attr('id');
        }else {
          return false;
        }
      }
    });

    var currentLink = menu.find('.current');
    if (currentId && currentLink.attr('href') != currentId) {
      currentLink.removeClass('current');
      menu.find('[href="' + currentId + '"]').addClass('current');
    }

  });
});
