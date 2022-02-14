const loveMeEl = document.querySelector('.loveMe');
const timesEl = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

loveMeEl.addEventListener('click', e => {
    if(clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if((new Date().getTime() - clickTime) < 500) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    } 
});

function createHeart(e) {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;
    
    // Get position of image (place where e originates) relative to the absolute left and top values of the browser
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;
    
    heart.style.left = `${xInside}px`;
    heart.style.top = `${yInside}px`;

    loveMeEl.appendChild(heart);
    timesEl.innerHTML = ++timesClicked;

    setTimeout(() => heart.remove(), 1000);
}