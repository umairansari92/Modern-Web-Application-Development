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




// ===================================== FAQ ================================= \\
let accordion = document.getElementsByClassName("accordion");
const totalAccordions = accordion.length;

for (let i = 0; i < totalAccordions; i++) {
  accordion[i].addEventListener("click", (e) => {
    let panel = e.target.nextElementSibling;
   
    if (panel.classList[1] === "panel-closed") {
      e.target.classList.toggle("accordion-active");
      panel.classList.toggle("panel-open");
      closeAllExcept(panel);
    }
  });
} 

const closeAllExcept = (pan) => {
  for (let i = 0; i < totalAccordions; i++) {
    let panelToClose = accordion[i].nextElementSibling;
    if(panelToClose !== pan){
       accordion[i].classList.remove("accordion-active");
       panelToClose.classList.remove("panel-open");
    }
  }
} 