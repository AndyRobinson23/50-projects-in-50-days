'use strict';

const loadText = document.querySelector('.loading-text');
const bgImg = document.querySelector('.bg');

let load = 0;


const blurring = function () {
    load++
    
    if(load > 99) {
        clearInterval(int);
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bgImg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};


let int = setInterval(blurring, 30);
