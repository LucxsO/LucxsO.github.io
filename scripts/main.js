document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.animated-nav-menu a');
    const slider = document.querySelector('.slider');

    const updateSlider = (activeLink) => {
        const activeRect = activeLink.getBoundingClientRect();
        const navRect = activeLink.closest('ul').getBoundingClientRect();
        slider.style.left = `${activeRect.left - navRect.left}px`;
        slider.style.width = `${activeRect.width}px`;
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
            updateSlider(link);
        });

        if (link.href === window.location.href) {
            link.classList.add('active');
            updateSlider(link);
        }
    });

    window.addEventListener('resize', () => {
        const activeLink = document.querySelector('.animated-nav-menu a.active');
        if (activeLink) {
            updateSlider(activeLink);
        }
    });
});
