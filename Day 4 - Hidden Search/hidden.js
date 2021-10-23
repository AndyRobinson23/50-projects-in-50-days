'use strict';

const searchEl = document.querySelector('.search');
const btnEl = document.querySelector('.btn'); 
const inputEl = document.querySelector('.input');

btnEl.addEventListener('click', () => {
    searchEl.classList.toggle('active');
    inputEl.focus();
});