const movies = [
    {
        id: "1",
        title: "Inception",
        year: "2010",
        director: "Christopher Nolan",
        description: "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
        poster: "https://via.placeholder.com/400x600?text=Inception"
    },
    {
        id: "2",
        title: "The Matrix",
        year: "1999",
        director: "Wachowskis",
        description: "A hacker discovers the truth about his reality and his role in the war against its controllers.",
        poster: "https://via.placeholder.com/400x600?text=The+Matrix"
    },
    {
        id: "3",
        title: "The Godfather",
        year: "1972",
        director: "Francis Ford Coppola",
        description: "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
        poster: "https://via.placeholder.com/400x600?text=The+Godfather"
    }
];

// Function to generate movie HTML
function movieTemplate(movie) {
    return `
      <div class="movie">
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="movie__details">
          <h2>${movie.title} (${movie.year})</h2>
          <p><strong>Director:</strong> ${movie.director}</p>
          <p>${movie.description}</p>
        </div>
      </div>
    `;
}

// To get URL parameter, you can use the new URLSearchParams.
function getParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// Function to display the movie
function displayMovie(movieId) {
    const movie = movies.find(m => m.id === movieId);
    const main = document.querySelector("main");

    if (movie) {
        main.innerHTML = movieTemplate(movie);
    } else {
        main.innerHTML = "<p>No movie found for the provided ID.</p>";
    }
}

// Once you get the param of a link;  you can then display it.
const urlMovieId = getParam("movieId");
if (urlMovieId) {
    displayMovie(urlMovieId);
}

// Alternative method to display movie when a button is clicked.
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const movieId = button.getAttribute("data-id");
        displayMovie(movieId);
    });
});