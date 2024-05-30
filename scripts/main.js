document.addEventListener('DOMContentLoaded', () => {
    // Highlight the active link
    const navLinks = document.querySelectorAll('.animated-nav-menu a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
