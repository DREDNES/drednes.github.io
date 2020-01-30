const sliderSettings = {
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
};

$(document).ready(function() {
  $('.slider-wrap').fadeOut(0);
  new Typed('#typed', {
    strings: ["Hi! I'm Narek Avagyan and here you can find projects from <a href='https://github.com/DREDNES'>my GitHub</a>!"],
    typeSpeed: 30,
    onComplete: () => {
      setTimeout(() => {
        if (window.innerHeight < 700) document.body.style.height = 'fit-content';
        $('.slider-wrap').fadeIn(800);
        $('.slider').slick(sliderSettings);
      }, 500);
    }
  });
});

function contactsToogle() {
  let buts = $('.sbutton');
  if (buts.first().hasClass('hidden')) buts = $(buts.get().reverse());
  let timer = 0;
  buts.each((i, element) => {
    setTimeout(() => {
      $(element).toggleClass('hidden');
    }, (timer += 75));
  });
}
