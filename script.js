document.addEventListener('DOMContentLoaded', function () {

    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            // animação começa qnd pelo menos 10% do elemento está visível
            threshold: 0.1 
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

});
