// highlight active nav menu
document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.pathname;
    const menuLinks = document.querySelectorAll('.menubar .nav-link');

    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});
// highlight active nav menu end //