document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.fading-gallery img');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const rect = img.getBoundingClientRect();
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const offsetX = centerX - (rect.left + rect.width / 2);
            const offsetY = centerY - (rect.top + rect.height / 2);

            images.forEach(image => {
                if (image !== img) {
                    image.style.transition = 'transform 0.7s, opacity 0.7s'; // Slower animation
                    image.style.transform = 'translateX(-100%)';
                    image.style.opacity = '0';
                }
            });

            img.style.transition = 'transform 0.7s, left 0.7s, top 0.7s, z-index 0s'; // Slower animation
            img.style.position = 'fixed';
            img.style.left = `${rect.left}px`;
            img.style.top = `${rect.top}px`;
            img.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(3)`;
            img.style.zIndex = '10000';

            setTimeout(() => {
                overlay.style.display = 'block';
                closeBtn.style.display = 'block';
            }, 700); // Match the animation duration
        });
    });

    closeBtn.addEventListener('click', () => {
        images.forEach(image => {
            image.style.transition = 'transform 0.7s, left 0.7s, top 0.7s, opacity 0.7s'; // Slower animation
            image.style.position = '';
            image.style.transform = '';
            image.style.opacity = '';
            image.style.zIndex = '';
            image.style.left = '';
            image.style.top = '';
        });

        overlay.style.display = 'none';
        closeBtn.style.display = 'none';
    });

    // Ensure the overlay also acts as a close button
    overlay.addEventListener('click', () => {
        closeBtn.click();
    });
});
