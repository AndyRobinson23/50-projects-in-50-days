const buttonsEl = document.querySelectorAll('.faq-toggle');

buttonsEl.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active');
    });
});
