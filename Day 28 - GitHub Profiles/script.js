const APIURL = 'https://api.github.com/users/';
const formEl = document.querySelector('.form');
const formInputEl = document.querySelector('.form input');
const mainEl = document.getElementById('main');

// FIXME: error handling does not work, shows the profile card with undefined values instead of the error card
const getUser = function(username) {
    fetch(APIURL + username).then(response => response.json()).then(data => {
        createUserCard(data);
        getRepos(username);;
    }).catch(err => {
        if(err.response.status == 404) {
            createErrorCard('No profile with this username');
        }
    });
}

const getRepos = function(username) {
    fetch(APIURL + username + '/repos?sort=created').then(response => response.json()).then(data => addReposToCard(data)).catch(err => {
            createErrorCard('Problem fetching repos');
    });
}

const createUserCard = function(userData) {
    const cardHTML = `
        <div class="profile-card">
            <div class="profile-card__left">
                <img src=${userData.avatar_url} />
            </div>
            <div class="profile-card__right">
                <h2 class="profile-card__name">${userData.login}</h2>
                <p class="profile-card__bio">${userData.bio}</p>
                <ul class="profile-card__stats">
                    <li class="profile-card__stat"><span class="profile-card__stat--number">${userData.followers}</span> followers</li>
                    <li class="profile-card__stat"><span class="profile-card__stat--number">${userData.following}</span> following</li>
                    <li class="profile-card__stat"><span class="profile-card__stat--number">${userData.public_repos}</span> Repos</li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `

    mainEl.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="profile-card">
            <h1>${msg}</h1>
        </div>
    `;

    mainEl.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    repos.slice(0, 10).forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('profile-card__repos');
        repoEl.href = repo.html_url;
        repoEl.target = '_blank';
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl);
    })
}

formEl.addEventListener('submit', e => {
    e.preventDefault();

    const user = formInputEl.value;

    if(user) {
        getUser(user);

        formInputEl.value = '';
    }
});