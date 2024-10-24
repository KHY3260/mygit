import { fetchPopularMovies, fetchMovieDetails } from "./api.js";
import { renderMovieCard, showMovieModal, closeModal } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#movie-container");

  fetchPopularMovies().then((movies) => {
    movies.forEach((movie) => {
      renderMovieCard(container, movie);
    });
  });

  document.querySelector(".modal-close").addEventListener("click", closeModal);
  document.querySelector("#movie-modal").addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  });
});

const searchBox = document.querySelector("#search-box");

function filterMovies() {
  const searchTerm = searchBox.value.toLowerCase();
  const movieCards = document.querySelectorAll(".movie-card");

  for (const card of movieCards) {
    const title = card.querySelector(".movie-title").textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

searchBox.addEventListener("input", filterMovies);

fetch(detailUrl, {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
  },
})
  .then((response) => response.json())
  .then((movie) => {
    console.log(movie); // 여기에서 overview 값이 있는지 확인
    showMovieModal(movie);
  })
  .catch((err) => console.error(err));
