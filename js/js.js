$(function() {
   document.getElementById("mobileNav").style.width = "0%";
});
(function () {
	$('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
	});
})();
function openCloseNav() {
   if(document.getElementById("mobileNav").style.width == "0%")
   {
      document.getElementById("mobileNav").style.width = "100%";
   }
   else
   {
      document.getElementById("mobileNav").style.width = "0%";
   }
 }