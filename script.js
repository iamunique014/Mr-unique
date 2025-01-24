$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition > 80) {
            $("#mainNav").addClass("navbar-scrolled");

        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    });
});


 /**
   * Init swiper sliders
   */
 function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);


  const lightbox = GLightbox({
    selector: '.glightbox', // Target the `glightbox` class
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);


/*const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class" , isOpen? "bi bi-x":"bi bi-list");
});

navLinks.addEventListener("click", () => {

    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "bi bi-list")
})*/