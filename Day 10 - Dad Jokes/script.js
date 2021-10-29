const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const generateJoke = async function() {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    };
    
    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    jokeEl.textContent = data.joke;
};

generateJoke();

jokeBtn.addEventListener('click', generateJoke);