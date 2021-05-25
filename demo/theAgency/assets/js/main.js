AOS.init();

$(document).ready(function () {
  var columnWidth;
  if (window.innerWidth <= 540) {
    columnWidth = 350;
  } else {
    columnWidth = 250;
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

  $('body').scrollspy({ target: '#header', offset: 100 });

  $('a.scrollto').on('click', function (e) {
    var target = this.hash;

    e.preventDefault();

    $('body').scrollTo(target, 800, { offset: -50, axis: 'y' });

    if ($('.navbar-collapse').hasClass('in')) {
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
  });

  $('#contact-form').submit(function (e) {
    e.preventDefault();
    var msg = $('#contact-form').serialize();

    $.ajax({
      type: 'POST',
      url: './assets/php/mail.php',
      data: msg,
      success: function (data) {
        $('#results').css('opacity', '1');
        $('#results').css('display', 'block');
        $('#results').html(data);
        setTimeout(() => {
          $('#results').css('opacity', '0');
          $('#results').html('');
        }, 5000);
      },
      error: function (xhr) {
        $('#results').css('background-color', 'rgb(202, 102, 102)');
        $('#results').css('display', 'block');
        $('#results').css('opacity', '1');
        $('#results').html('Что-то пошло не так... Обновите страницу и попробуйте еще раз.');
        console.error('AJAX Error:', xhr.status, xhr.statusText);
        setTimeout(() => {
          $('#results').css('opacity', '0');
          $('#results').html('');
        }, 5000);
      },
    });
  });
});
