const mobileMediaQuery = window.matchMedia('(max-width: 767px)');

const scrollToElement = (element) => {
    if (!element) {
        return;
    }

    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};

const promoButton = document.querySelector('.promo__button');
const aboutGames = document.querySelector('.about-games');
const mobileGames = document.querySelector('.games_mobile');

promoButton?.addEventListener('click', () => {
    scrollToElement(mobileMediaQuery.matches ? mobileGames : aboutGames);
});

document.querySelectorAll('.games:not(.games_mobile) .card[data-game]').forEach((card) => {
    card.addEventListener('click', (event) => {
        event.preventDefault();
        scrollToElement(document.querySelector(`#game-${card.dataset.game}`));
    });
});
