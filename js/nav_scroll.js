$(function navScroll() {
  var navBox = $('.navigation-centered');

  var targetPos = 450;

  $(window).scroll( function() {
    var scrollPos = $(window).scrollTop();

    if (scrollTop > targetPos) {
      navBox.addClass('fixed');
    } else {
      navBox.removeClass('fixed');
    }
  });
});
