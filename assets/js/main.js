document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-quart'
    });

    if (document.getElementById('contactForm')) {
        handleFormValidation('contactForm', 'formStatus');
    }

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroTitle = document.querySelector('.hero__title');
        if (heroTitle) {
            heroTitle.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroTitle.style.opacity = 1 - scrolled / 600;
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 72,
                    behavior: 'smooth'
                });
            }
        });
    });
});