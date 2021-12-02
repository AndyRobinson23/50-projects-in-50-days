const nav = document.querySelector('.nav');

// Do NOT implement a sticky nav like this in production as it is terrible for performance becasue the scroll event fires hundreds of times in the background. Use the intersection observer API instead
window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}