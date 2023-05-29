let jokeResponse = document.querySelector('p');
let newJoke = document.querySelector('button');
function getChuckNorrisJoke() {
    let url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let joke = data.value;
            jokeResponse.innerText = joke;
        })
};
getChuckNorrisJoke();
newJoke.addEventListener('click', (event) => {
    getChuckNorrisJoke();
});