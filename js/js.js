$(function () {
   document.getElementById("mobileNav").style.width = "0%";
});
(function () {
   $('.menu-wrapper').on('click', function () {
      $('.hamburger-menu').toggleClass('animate');
      if (document.getElementById("mobileNav").style.width == "0%") {
         document.getElementById("mobileNav").style.width = "100%";
         document.getElementById("mobileNav").style.opacity = "0.95";
      } else {
         document.getElementById("mobileNav").style.width = "0%";
         document.getElementById("mobileNav").style.opacity = "0";
      }
   });
})();

function collapseContactOpen(iconID) {
   document.querySelectorAll('.hover-contact-icon').forEach(element => {
      element.style.display = "none";
   });
   document.getElementById("collapsed-contact-wrap").style.display = "block";
   const contact = document.getElementById("contact");
   switch (iconID) {
      case 'icon-phone':
         contact.innerHTML = `
         <span class="col-2"><i class="main-footer-icons ${iconID}" style="color: #21e00f"></i></span>
         <span class="col-8"><a class="lines-effect" style="text-align: center" href="tel:+79992468515"><span>8 (999) 246 85 15</span></a></span>
         <span class="col-2"><i class="main-footer-icons icon-cancel" onclick="collapseContactClose()"></i></span>`;
         break;

      case 'icon-paper-plane':
         contact.innerHTML = `
         <span class="col-2"><i class="main-footer-icons ${iconID}" style="color: #0088cc"></i></span>
         <span class="col-8"><a class="lines-effect" style="text-align: center" href="https://t.me/drednes"><span>Перейти в Telegram</span></a></span>
         <span class="col-2"><i class="main-footer-icons icon-cancel" onclick="collapseContactClose()"></i></span>`
         ;
         break;

      case 'icon-whatsapp':
         contact.innerHTML = `
         <span class="col-2"><i class="main-footer-icons ${iconID}" style="color: #25d366"></i></span>
         <span class="col-8"><a class="lines-effect" style="text-align: center" href="https://api.whatsapp.com/send?phone=79992468515"><span>Перейти в What's up</span></a></span>
         <span class="col-2"><i class="main-footer-icons icon-cancel" onclick="collapseContactClose()"></i></span>`;
         break;

      case 'icon-vkontakte':
         contact.innerHTML = `<span class="col-2"><i class="main-footer-icons ${iconID}" style="color: #3376c9"></i></span>
         <span class="col-8"><a class="lines-effect" style="text-align: center" href="https://vk.com/ava.narek"><span>Перейти в VK</span></a></span>
         <span class="col-2"><i class="main-footer-icons icon-cancel" onclick="collapseContactClose()"></i></span>`;
         break;
      default:

         break;
   }
}
function collapseContactClose() {
   document.querySelectorAll('.hover-contact-icon').forEach(element => {
      element.style.display = "block";
   });
   document.getElementById("collapsed-contact-wrap").style.display = "none";
}