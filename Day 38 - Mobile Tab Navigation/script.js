'use strict';

const images = document.querySelectorAll('.content');
const buttons = document.querySelectorAll('nav ul li');

buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        images.forEach(img => img.classList.remove('show'));
        buttons.forEach(btn => btn.classList.remove('active'));
        images[idx].classList.add('show');
        buttons[idx].classList.add('active');
    })
})