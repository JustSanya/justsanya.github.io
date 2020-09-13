// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

$(document).ready(function(){
  $(".owl-carousel-one").owlCarousel({
    items: 1,
    dots: true,
  });
  $(".owl-carousel-two").owlCarousel({
    items: 1,
    dots: true,
    nav: true,
  });
});

$('.carousel').slick({
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  mobileFirst: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 520,
      settings: 'unslick'
    }
  ]
});