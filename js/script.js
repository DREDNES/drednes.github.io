$(window).load(function(){
  var tl = new TimelineMax();
  
  tl.to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '50%' }, ease: Power2.easeOut}, 'close')
  .to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '50%' }, ease: Power2.easeOut}, 'close')
  .to($('.loader'), 0.2, {opacity: 1})
  .to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '0%' }, ease: Power2.easeOut}, '+=1.5', 'open')
  .to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '0%' }, ease: Power2.easeOut}, '-=0.2', 'open')
  .to($('.loader'), 0.2, {opacity: 0}, '-=0.2');
});

$(function () {
   document.getElementById('mobileNav').style.width = '0%';
});
(function () {
   $('.menu-wrapper').on('click', function () {
      $(this).find('.hambergerIcon').toggleClass('open');
      if (document.getElementById('mobileNav').style.width == '0%') {
         document.getElementById('mobileNav').style.width = '100%';
         document.getElementById('mobileNav').style.opacity = '0.95';
      } else {
         document.getElementById('mobileNav').style.width = '0%';
         document.getElementById('mobileNav').style.opacity = '0';
      }
   });
})();

function CollapseContactOpen(iconID) {
   
   const contact = document.getElementById('contact');
   $('.switch-block').toggleClass('start-anim');
   switch (iconID) {
      case 'icon-phone':
         contact.innerHTML = `
            <i class="col-2 main-footer-icons ${iconID}" style="color: #21e00f"></i>
            <div class="col-8 collapsed-contact row info">
              <a class="mx-auto" href="tel:+79992468515">8 (999) 246 85 15</a>
            </div>
              <i class="col-2 icon-cancel-circled" onclick="CollapseContactClose()"></i>`;
         break;

      case 'icon-paper-plane':
         contact.innerHTML = `
         <i class="col-2 main-footer-icons ${iconID}" style="color: #0088cc"></i>
         <div class="col-8 collapsed-contact row info">
           <a class="mx-auto" href="https://t.me/drednes">Перейти в Telegram</a>
         </div>
           <i class="col-2 icon-cancel-circled" onclick="CollapseContactClose()"></i>`;
         break;

      case 'icon-whatsapp':
         contact.innerHTML = `
         <i class="col-2 main-footer-icons ${iconID}" style="color: #25d366"></i>
         <div class="col-8 collapsed-contact row info">
           <a class="mx-auto" href="https://api.whatsapp.com/send?phone=79992468515">Перейти в What's up</a>
         </div>
           <i class="col-2 icon-cancel-circled" onclick="CollapseContactClose()"></i>`;
         break;

      case 'icon-vkontakte':
         contact.innerHTML = `
         <i class="col-2 main-footer-icons ${iconID}" style="color: #3376c9"></i>
         <div class="col-8 collapsed-contact row info">
           <a class="mx-auto" href="https://vk.com/ava.narek">Перейти в VK</a>
         </div>
           <i class="col-2 icon-cancel-circled" onclick="CollapseContactClose()"></i>`;
         break;
      default:

         break;
   }


}

function CollapseContactClose() {
   $('.switch-block').toggleClass('start-anim');
   setTimeout(document.getElementById('contact').innerHTML = '', 500);
}


jQuery(document).ready(function(event){
   var isAnimating = false,
     newLocation = '';
     firstLoad = false;
   
   //trigger smooth transition from the actual page to the new one 
   $('main').on('click', '[data-type="page-transition"]', function(event){
     event.preventDefault();
     //detect which page has been selected
     var newPage = $(this).attr('href');
     //if the page is not already being animated - trigger animation
     if( !isAnimating ) changePage(newPage, true);
     firstLoad = true;
   });
 
   //detect the 'popstate' event - e.g. user clicking the back button
   $(window).on('popstate', function() {
      if( firstLoad ) {
       /*
       Safari emits a popstate event on page load - check if firstLoad is true before animating
       if it's false - the page has just been loaded 
       */
       var newPageArray = location.pathname.split('/'),
         //this is the url of the page to be loaded 
         newPage = newPageArray[newPageArray.length - 1];
 
       if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
     }
     firstLoad = true;
    });
 
    function changePage(url, bool) {
     isAnimating = true;
     // trigger page animation
     $('body').addClass('page-is-changing');
     $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        loadNewContent(url, bool);
       newLocation = url;
       $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
     });
     //if browser doesn't support CSS transitions
     if( !transitionsSupported() ) {
       loadNewContent(url, bool);
       newLocation = url;
     }
    }
 
    function loadNewContent(url, bool) {
       url = ('' == url) ? 'index.html' : url;
      var newSection = 'cd-'+url.replace('.html', '');
      var section = $('<div class="cd-main-content '+newSection+'"></div>');
         
      section.load(url+' .cd-main-content > *', function(event){
       // load new content and replace <main> content with the new one
       $('main').html(section);
       //if browser doesn't support CSS transitions - dont wait for the end of transitions
       var delay = ( transitionsSupported() ) ? 1200 : 0;
       setTimeout(function(){
         //wait for the end of the transition on the loading bar before revealing the new content
         ( section.hasClass('cd-about') ) ? $('body').addClass('cd-about') : $('body').removeClass('cd-about');
         $('body').removeClass('page-is-changing');
         $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
           isAnimating = false;
           $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
         });
 
         if( !transitionsSupported() ) isAnimating = false;
       }, delay);
       
       if(url!=window.location && bool){
         //add the new page to the window.history
         //if the new page was triggered by a 'popstate' event, don't add it
         window.history.pushState({path: url},'',url);
       }
       });
   }
 
   function transitionsSupported() {
     return $('html').hasClass('csstransitions');
   }
 });