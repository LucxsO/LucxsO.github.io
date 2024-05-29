document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.fading-gallery img');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');

    images.forEach(img => {
        img.addEventListener('click', () => {
            images.forEach(image => {
                if (image !== img) {
                    image.style.transform = 'translateX(-100%)';
                    image.style.opacity = '0';
                }
            });

            img.style.transition = 'transform 0.5s, z-index 0s';
            img.style.transform = 'scale(5)';
            img.style.zIndex = '10000';

            setTimeout(() => {
                overlay.style.display = 'block';
                closeBtn.style.display = 'block';
            }, 500);
        });
    });

    closeBtn.addEventListener('click', () => {
        images.forEach(image => {
            image.style.transform = '';
            image.style.opacity = '';
            image.style.zIndex = '';
        });

        overlay.style.display = 'none';
        closeBtn.style.display = 'none';
    });
});
