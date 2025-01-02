const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (scrollAmount < maxScroll) {
        scrollAmount += carousel.clientWidth / 2;
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= carousel.clientWidth / 2;
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }
});
