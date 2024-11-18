
// APPEAR ANIMATION  GRID ------------------------------------------------------

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');

        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//BOUNCE--------------------------------------------------------------

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('bounce');
    });

    card.addEventListener('animationend', () => {
        card.classList.remove('bounce'); // Remove class after animation ends
    });
});
