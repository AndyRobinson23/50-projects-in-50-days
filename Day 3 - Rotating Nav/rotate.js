const containerEl = document.querySelector('.container');
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', () => containerEl.classList.add('show-nav'));
close.addEventListener('click', () => containerEl.classList.remove('show-nav'));