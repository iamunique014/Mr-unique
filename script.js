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