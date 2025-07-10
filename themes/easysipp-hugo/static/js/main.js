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

// Back to TOP button //
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTopBtn');

    // Function to show/hide the button based on scroll position
    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }

    // When the user scrolls down 200px from the top, show the button
    window.onscroll = function() { scrollFunction() };

    // When the user clicks on the button, scroll to the top of the document
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// Back to TOP button end //
