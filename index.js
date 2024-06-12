
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, observerOptions);

    boxes.forEach(box => {
        box.style.animationPlayState = 'paused'; // Pause animation initially
        observer.observe(box);
    });
});

