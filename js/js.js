$(document).ready(function () {
    $('body').flowtype({
        minimum   : 500,
        maximum   : 1200,
        minFont   : 12,
        maxFont   : 40,
        fontRatio : 18
     }),
     $('h3').flowtype({
        minimum   : 200,
        maximum   : 1500,
        minFont   : 18,
        maxFont   : 32,
        fontRatio : 15
     });
     $('h1').flowtype({
        minimum   : 500,
        maximum   : 2000,
        minFont   : 18,
        maxFont   : 48,
        fontRatio : 20
     });
     $('h2').flowtype({
        minimum   : 500,
        maximum   : 1500,
        minFont   : 18,
        maxFont   : 38,
        fontRatio : 22
     });
    //  $('.featured-article').flowtype({
    //     minFont   : 12,
    //     fontRatio : 20
    //  }),
    //  $('.side-stories').flowtype({
    //     minFont   : 16,
    //     fontRatio : 30
    //  });
});
