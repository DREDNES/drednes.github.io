AOS.init();

$(document).ready(function () {
  var columnWidth;
  if (window.innerWidth <= 450) {
    columnWidth = 350;
  } else {
    columnWidth = 200;
  }

  var $grid = $('.masonry_grid').masonry({
    itemSelector: '.grid-item',
    columnWidth,
    fitWidth: true,
  });

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
    $grid.masonry('layout');
  });

  /* ======= Scrollspy ======= */
  $('body').scrollspy({ target: '#header', offset: 100 });

  /* ======= ScrollTo ======= */
  $('a.scrollto').on('click', function (e) {
    //store hash
    var target = this.hash;

    e.preventDefault();

    $('body').scrollTo(target, 800, { offset: -50, axis: 'y' });
    //Collapse mobile menu after clicking
    if ($('.navbar-collapse').hasClass('in')) {
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
  });
});
