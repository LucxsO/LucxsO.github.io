document.addEventListener('DOMContentLoaded', () => {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        const firstImage = container.querySelector('.first-image');
        const secondImage = container.querySelector('.second-image');

        container.addEventListener('mouseenter', () => {
            firstImage.style.opacity = '0';
            secondImage.style.opacity = '1';
        });

        container.addEventListener('mouseleave', () => {
            firstImage.style.opacity = '1';
            secondImage.style.opacity = '0';
        });
    });

    console.log('Dynamic content script loaded.');
});
