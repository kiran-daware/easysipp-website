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



// JavaScript for the Slider //
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.getElementById('slider-container');
    const slides = sliderContainer.children;
    const totalSlides = slides.length;
    let currentSlide = 0;

    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    const sliderDotsContainer = document.getElementById('slider-dots');

    // Function to update slide position
    function updateSlider() {
        // Calculate the transform value to show the current slide
        const offset = -currentSlide * 100;
        sliderContainer.style.transform = `translateX(${offset}%)`;
        updateDots(); // Update dot indicators
    }

    // Function to create and update dots
    function updateDots() {
        sliderDotsContainer.innerHTML = ''; // Clear existing dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            // All base styling for the dot is handled by CSS selector .slider-dots-container span
            // We only need to add/remove the 'active-dot' class for the active state
            if (i === currentSlide) {
                dot.classList.add('active-dot'); // Add class for active dot
            }
            dot.dataset.slideIndex = i; // Store index for click handling
            dot.addEventListener('click', function() {
                currentSlide = parseInt(this.dataset.slideIndex);
                updateSlider();
            });
            sliderDotsContainer.appendChild(dot);
        }
    }

    // Event listeners for navigation buttons
    prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
        updateSlider();
    });

    // Initialize slider and dots on load
    updateSlider();
});
// JavaScript for the Slider end //


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
