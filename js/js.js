$(function () {
   document.getElementById("mobileNav").style.width = "0%";
});
(function () {
   $('.menu-wrapper').on('click', function () {
      $(this).find(".hambergerIcon").toggleClass("open");
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
            <i class="main-footer-icons ${iconID}" style="color: #21e00f"></i>
            <div class="col-8 collapsed-contact row info">
              <a class="mx-auto"  href="tel:+79992468515">8 (999) 246 85 15</a>
            </div>
              <i class="col-2 icon-cancel-circled" onclick="collapseContactClose()"></i>`;
         break;

      case 'icon-paper-plane':
         contact.innerHTML = `
         <i class="main-footer-icons ${iconID}" style="color: #0088cc"></i>
         <div class="col-8 collapsed-contact row info">
           <a class="mx-auto"  href="https://t.me/drednes">Перейти в Telegram</a>
         </div>
           <i class="col-2 icon-cancel-circled" onclick="collapseContactClose()"></i>`;
         break;

      case 'icon-whatsapp':
         contact.innerHTML = `
         <i class="main-footer-icons ${iconID}" style="color: #25d366"></i>
         <div class="col-8 collapsed-contact row info">
           <a class="mx-auto"  href="https://api.whatsapp.com/send?phone=79992468515">Перейти в What's up</a>
         </div>
           <i class="col-2 icon-cancel-circled" onclick="collapseContactClose()"></i>`;
         break;

      case 'icon-vkontakte':
         contact.innerHTML = `
         <i class="main-footer-icons ${iconID}" style="color: #3376c9"></i>
         <div class="col-8 collapsed-contact row info">
           <a class="mx-auto"  href="https://vk.com/ava.narek">Перейти в VK</a>
         </div>
           <i class="col-2 icon-cancel-circled" onclick="collapseContactClose()"></i>`;
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