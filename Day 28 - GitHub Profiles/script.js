const APIURL = 'https://api.github.com/users/';
const formEl = document.querySelector('.form');
const formInputEl = document.querySelector('.form input');

const getUser = function(username) {
    fetch(APIURL + username).then(response => response.json()).then(data => console.log(data)).catch(err => console.error(err));
}

// getUser('AndyRobinson23');

formEl.addEventListener('submit', e => {
    e.preventDefault();

    const user = formInputEl.value;

    if(user) {
        getUser(user);

        formInputEl.value = '';
    }
});