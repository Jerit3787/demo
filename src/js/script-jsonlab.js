const movies = [
    { title: "Inception", genre: "Science Fiction", price: 4.99 },
    { title: "The Godfather", genre: "Crime", price: 3.99 },
    { title: "Frozen", genre: "Animation", price: 2.99 },
    { title: "Avengers: Endgame", genre: "Action", price: 5.99 },
    { title: "Parasite", genre: "Drama", price: 3.49 }
];

displayMovies(movies);
serializeJSON(movies);

function displayMovies(movieArray) {
    const div = document.querySelector('#movieList');
    div.innerHTML = '' //Clears the previous movies

    movieArray.forEach(movie => {
        const movieDiv = document.createElement('div');
        const title = document.createElement('h3');
        const genre = document.createElement('h6');
        const price = document.createElement('p');

        movieDiv.classList.add('movie-div');
        title.classList.add('movie-title');
        genre.classList.add('movie-genre');
        price.classList.add('movie-price');

        title.textContent = movie.title;
        genre.textContent = movie.genre;
        price.textContent = `RM${movie.price}`;

        movieDiv.appendChild(title);
        movieDiv.appendChild(genre);
        movieDiv.appendChild(price);

        div.appendChild(movieDiv);
    });
}

function serializeJSON(jsonObject) {
    const jsonString = JSON.stringify(jsonObject, null, 2);
    const jsonDiv = document.querySelector('#jsonOutput');

    jsonDiv.textContent = jsonString;
}

const movieForm = document.querySelector('#movieForm');

movieForm.addEventListener('submit', (e) => {
    e.preventDefault;

    const title;
})