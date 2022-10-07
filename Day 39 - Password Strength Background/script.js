const bg = document.getElementById('background');
const passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', () => {
    const length = passwordInput.value.length;
    bg.style.filter = `blur(${20 - length * 2}px)`;
});