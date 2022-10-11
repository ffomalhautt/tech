'use strict';

const sliders = document.querySelectorAll('.images'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next');
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n > sliders.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = sliders.length;
    }

    sliders.forEach(item => item.style.display = 'none');
    sliders[slideIndex - 1].style.display = 'block';
}

function plusSliders(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
    plusSliders(-1);
});

next.addEventListener('click', () => {
    plusSliders(1);
}); 


