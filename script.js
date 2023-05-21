window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    navbar.style.top = window.pageYOffset + "px";
});
