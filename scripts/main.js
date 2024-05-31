document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.animated-nav-menu a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(container => {
        const firstImage = container.querySelector('.hover-image');
        const secondImage = container.querySelector('.second-image');

        container.addEventListener('mouseenter', () => {
            secondImage.style.transform = 'translateX(0)';
            secondImage.style.opacity = '1';
            firstImage.style.transform = 'translateX(-100%)';
            firstImage.style.opacity = '0';
        });

        container.addEventListener('mouseleave', () => {
            secondImage.style.transform = 'translateX(100%)';
            secondImage.style.opacity = '0';
            firstImage.style.transform = 'translateX(0)';
            firstImage.style.opacity = '1';
        });
    });
});
