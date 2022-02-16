const loveMeEl = document.querySelector('.loveMe');
const timesEl = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

// NOTE: there is also a 'dblclick' event we could have used here which would have negated the need for the if/else block below, but the below was used to allow greater control over how many milliseconds between clicks can elapse for it to still be considered a double click
loveMeEl.addEventListener('click', e => {
    // On the first click on the image, clickTime will be 0 and so will be updated to a unix timestamp of the current time
    if(clickTime === 0) {
        clickTime = new Date().getTime();
    // On the second click, clickTime will no longer be 0 and so this else block will be hit
    } else {
        // If the time between the first click on the image (clickTime) and the time now is less that 500ms, the if block will be hit. Otherwise, the else block is hit and clickTime just gets updated to the time right now
        if((new Date().getTime() - clickTime) < 500) {
            // createHeart function gets called with the event from this function passed in (the target of which is the div which contains the image), then clickTime gets reset to 0
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

    // Get the horizontal and vertical coordinates of where the event occurred within the viewport (not within the whole page)
    const x = e.clientX;
    const y = e.clientY;
    console.log('clientX and Y')
    console.log(x,y);
    
    // Get position of the upper left corner of the image (place where e originates) relative to the absolute left and top values of the nearest relatively positioned parent
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;
    console.log('leftOffset', 'topOffset')
    console.log(leftOffset, topOffset)

    // Subtract where the event occured from the number of pixels this element is from the nearest relatively positioned parent
    const xInside = x - leftOffset;
    const yInside = y - topOffset;
    
    // Absolutely position the heart using the above values
    heart.style.left = `${xInside}px`;
    heart.style.top = `${yInside}px`;

    // Insert this element in to the div which contains the image
    loveMeEl.appendChild(heart);
    // Update the text which shows the number times the image is double clicked
    timesEl.innerHTML = ++timesClicked;

    // Remove the element after 1 second so we don't have loads of heart icons clogging the dom
    setTimeout(() => heart.remove(), 1000);
}