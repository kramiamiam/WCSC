document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    function checkWindowSize() {
        if (window.innerWidth <= 768) {
            navToggle.style.display = 'block';
            if (!navLinks.classList.contains('nav-links-active')) {
                navLinks.style.display = 'none';
            }
        } else {
            navToggle.style.display = 'none';
            navLinks.style.display = 'flex';
            navLinks.classList.remove('nav-links-active');
        }
    }

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('nav-links-active');
        if (navLinks.classList.contains('nav-links-active')) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // Initial check
    checkWindowSize();

    // Check on window resize
    window.addEventListener('resize', checkWindowSize);
});
