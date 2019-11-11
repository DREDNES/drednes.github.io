$(document).ready(function() {
  $('.slider').on('init', () => {
    const width = window.innerWidth;
    const count = $('.slider .slick-slide').length;
    if (width >= 2000 && count <= 4) {
      $('.slick-dots').hide();
    }
  });

  $('.slider-wrap').fadeOut(0);
  new Typed('#typed', {
    strings: ["Hi! I'm Narek Avagyan and here you can find projects from my GitHub!"],
    typeSpeed: 30,
    onComplete: () => {
      setTimeout(() => {
        if (window.innerHeight < 700) document.body.style.height = 'fit-content';
        $('.slider-wrap').fadeIn(800);
        sliderInit();
      }, 500);
    }
  });
});

const sliderInit = () =>
  $('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
