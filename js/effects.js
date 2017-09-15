var yourNavigation = $(".navbar");
    stickyDiv = "sticky";
    yourHeader = $('.bgimg-1').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
});