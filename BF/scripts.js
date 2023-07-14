document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init();

    // Mobile Menu Toggle
    document.getElementById('mobile-menu-button').addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('hidden');
    });
});
