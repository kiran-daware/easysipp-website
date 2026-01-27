// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Copy Code Buttons
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', async function() {
        const code = this.getAttribute('data-text');
        try {
            await navigator.clipboard.writeText(code);
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            this.style.background = 'rgba(16, 185, 129, 0.2)';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });
});

// Mobile Menu Toggle button
const navLinks = document.querySelector('.nav-links');
const menuBtn = document.querySelector('.mobile-menu-btn'); 

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    navLinks.classList.toggle('active');
});

// Close menu when clicking anywhere else
window.addEventListener('click', (e) => {
    // If the menu is open and the click was NOT on the menu or the button
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !menuBtn.contains(e.target)) {
        
        navLinks.classList.remove('active');
    }
});


// Nav Shadow on Scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 50) {
        nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.18)';
    } else {
        nav.style.boxShadow = 'none';
    }
});


// Fade in on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .screenshot-item, .use-case-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
