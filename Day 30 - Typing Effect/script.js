const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

// Initial settings
const text = 'We love programming!';
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
    // Output the first letter of the text to the screen
    textEl.innerText = text.slice(0, idx);

    // Increase the index by one in order to move to the next letter
    idx++;

    // Check if we've hit the end of the letters. If so, reset the index to the first letter
    if(idx > text.length) idx = 1;

    // Call this function again every number of seconds defined by the 'speed' input
    setTimeout(writeText, speed);
};

// Update the speed when the Speed input element is adjusted
speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
})

