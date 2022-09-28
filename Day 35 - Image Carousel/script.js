'use strict';

const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const img = document.querySelectorAll('#imgs img')

let idx = 0;
let interval = setInterval(run, 2000);

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    // check to see if the image showing in the carousel is the last one. If it is, reset to the first image
    if(idx > img.length - 1) {
        idx = 0;
    // check to see if the image showing in the carousel is the first one. If it is, reset to the last image
    } else if(idx < 0) {
        idx = img.length -1;
    }
    // Move the whole image container left by 500px each time this function runs
    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

// Reset the interval to avoid the issue where the interval running on a set timer every 2 seconds interferes with the manually moving the carousel via the left and right buttons
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
});

leftBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
});