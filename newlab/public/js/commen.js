$(function(){
  var aside = $('#aside');
  var hintTop = $('#hint-top');
  var win = $(window);
  var doc = $(document);
  var headerHeight = $('#header').height();
  win.scroll(function () {
    if (doc.scrollTop() >= headerHeight) {
      aside.addClass('fixed-aside');
      hintTop.removeClass('hidden');
    }else {
      aside.removeClass('fixed-aside');
      hintTop.addClass('hidden');
    };
  });
});
